import { listGrupos } from '../operations/grupo.operations.js';

export const Grupo = async (req,res) => {
    try {        
        const lstGrupos = await listGrupos()                

        return res.status(200).json(lstGrupos);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};