import { listTrabEmpresas } from '../operations/nomina.operations.js'

export const ListarTrabEmpresas = async (req, res) => {    
    try {        
        ///OBTENER PARAMETROS
        const {
            Rucs,
            CodUnid,
            NroDias            
        } = req.body
        
        ///USUARIO DEL CERTIFICADO
        const usuario = req.currentUser
        ///APLICATIVO DEL CERTIFICADO
        const app = req.currentApp
        const listar_trab_empr = await listTrabEmpresas(Rucs, CodUnid, NroDias, usuario)

        return res.status(200).json(listar_trab_empr);
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};