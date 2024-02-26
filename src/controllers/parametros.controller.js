import { listNivel,listGrado,listSeccion,listEstudiantes,lstCuestionario } from '../operations/parametros.operations.js';

export const NivelCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst
        } = req.body;

        const lstNiveles = await listNivel(CodInst)                

        return res.status(200).json(lstNiveles);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const GradoCtrl = async (req,res) => {
    try {    
            
        const {
            CodNivel
        } = req.body;

        const lstGrado = await listGrado(CodNivel)                

        return res.status(200).json(lstGrado);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const SeccionCtrl = async (req,res) => {
    try {    
            
        const {
            CodNivel,
            CodGrado
        } = req.body;

        const lstSeccion = await listSeccion(CodNivel,CodGrado)                

        return res.status(200).json(lstSeccion);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const EstudiantesCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            CodNivel,
            CodGrado,
            CodSecc
        } = req.body;

        const lstEstudiantes = await listEstudiantes(CodInst,CodNivel,CodGrado,CodSecc)                

        return res.status(200).json(lstEstudiantes);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const CuestionarioCtrl = async (req,res) => {
    try {    
            
        const {
            CodPara            
        } = req.body;

        const lstCuestionarios_ = await lstCuestionario(CodPara)                

        return res.status(200).json(lstCuestionarios_);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

