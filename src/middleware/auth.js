import { X509Certificate, createPrivateKey } from 'crypto'
import { find_access } from '../operations/security.js'

export const certMiddleware = async (req, res, next) => {
    const {
        ca = null
    } = req.headers

    try {
        if (ca) {
            let buff_ca = Buffer.from(ca, 'base64')
            let text_ca = buff_ca.toString()
            const x509 = new X509Certificate(text_ca)
            const key = createPrivateKey(process.env.WORKIN_KEY)
            const validate = x509.checkPrivateKey(key)
            if (validate) {
                const access = await find_access(x509.fingerprint256)
                if (access.length > 0) {
                    const access_data = access[0]
                    let pass = true
                    if (access_data.IpsDire !== '*') {
                        if (req.ip !== access_data.IpsDire) {
                            pass = false
                        }
                    }
                    if (pass){
                        req.currentUser = access_data.CodUsua
                        req.currentApp = access_data.SecAcce
                        next()
                    }
                    else
                        return res.status(401).json({ message: "Unauthorized!" })
                } else {
                    return res.status(401).json({ message: "Unauthorized!" })
                }
            }
            else
                return res.status(401).json({ message: "Unauthorized!" })
        } else {
            return res.status(401).json({ message: "Unauthorized!" })
        }
    } catch (ex) {
        console.log(ex)
        return res.status(401).json({ message: "Unauthorized!" })
    }
}