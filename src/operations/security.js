import { connectMssql } from '../database/mssql.js'

export const find_access = async (fingerprint) => {
    const pool = await connectMssql(true)
    try {
        const result = await pool.request()
            .input('FirCert', fingerprint)
            .execute('Seguridad.USP_SEL_M_CertUsua_001')
        return result.recordset
    }
    catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}