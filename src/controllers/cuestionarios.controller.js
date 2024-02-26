import { 
     insCuestionarioDirectorEstudiante
    ,insCuestionarioGeneral
    ,insCuestionarioDocente
    ,listCuestionariosGrupDoc
    ,listCuestionariosGrupCDDoc
    ,insCuestionarioFile
    ,updCuestionarioCab
    ,listCuestionariosGrupEst
    ,listCuestionariosGrupCDEst
    ,listCuestionariosIndivDoc
    ,listCuestionariosIndivCDDoc 
    ,listCuestionariosEstudiantes
    ,listCuestionariosEstudiantesDet
    ,listCitasDirector
    ,listCuestionariosEstudiantesPad} from '../operations/cuestionarios.operations.js';

export const insCuestionarioDE = async (req,res) => {
    try {    
            
        const {
            CodInst,
            CodEst,
            CodNivel,
            CodGrado,
            CodSecc,            
            CodUser,
            lstCuestionario
        } = req.body;

        const response = await insCuestionarioDirectorEstudiante(
            CodInst,
            CodEst,
            CodNivel,
            CodGrado,
            CodSecc,            
            CodUser,
            lstCuestionario)                
        
        if(response[0].Res === 1){            
            return res.status(200).json({
                status: true,
                message: 'Proceso registrado correctamente',
                data: ''
            });
        }
        else{
            return res.status(400).json({
                status: false,
                message: 'Ocurrio un error en el proceso',
                data: ''
            });
        }        
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const insCuestionarioCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            CodCarg,
            Tipo,         
            CodUser,
            lstCuestionario
        } = req.body;

        const insCuestionario_ = await insCuestionarioGeneral(
            CodInst,
            CodCarg,
            Tipo,         
            CodUser,
            lstCuestionario)                
        
        if(insCuestionario_[0].Res === 1){            
            return res.status(200).json({
                status: true,
                message: 'Proceso registrado correctamente',
                data: ''
            });
        }
        else{
            return res.status(400).json({
                status: false,
                message: 'Ocurrio un error en el proceso',
                data: ''
            });
        }        
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const insCuestionarioDocCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            CodNivel,
            CodGrado,
            CodSecc,                   
            CodUser,
            lstCuestionario
        } = req.body;

        const insCuestionarioDoc_ = await insCuestionarioDocente(
            CodInst,
            CodNivel,
            CodGrado,
            CodSecc,                   
            CodUser,
            lstCuestionario)                
        
        if(insCuestionarioDoc_[0].Res === 1){            
            return res.status(200).json({
                status: true,
                message: 'Proceso registrado correctamente',
                data: ''
            });
        }
        else{
            return res.status(400).json({
                status: false,
                message: 'Ocurrio un error en el proceso',
                data: ''
            });
        }        
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const listCuestionariosGrupDocCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin
        } = req.body;     

        const result = await listCuestionariosGrupDoc(
            FechaInicio,
            FechaFin)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const listCuestionariosGrupCDDocCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            IdCuest
        } = req.body;

        const result = await listCuestionariosGrupCDDoc(
            CodInst,
            IdCuest)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result[0][0],
            details: result[1]
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const insCuestionarioFileCtrl =  (CodInst,IdCuest,NomFile) => {
    try {                       

        const response = insCuestionarioFile(
            CodInst,
            IdCuest,
            NomFile)                
                    
        return {
            status: true,
            message: 'Proceso registrado correctamente',
            data: ''
        };
         
    } catch (error) {
        return {
            status: false,
            message: error,
            data: ''
        };
    }
};

export const updCuestionarioCabCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            IdCuest,
            Tipo
        } = req.body;

        const result = await updCuestionarioCab(
            CodInst,
            IdCuest,
            Tipo)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: ''            
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const listCuestionariosGrupEstCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin
        } = req.body;     

        const result = await listCuestionariosGrupEst(
            FechaInicio,
            FechaFin)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};
export const listCuestionariosGrupCDEstCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            IdCuest
        } = req.body;

        const result = await listCuestionariosGrupCDEst(
            CodInst,
            IdCuest)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result[0][0],
            details: result[1]
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const listCuestionariosIndivDocCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin
        } = req.body;     

        const result = await listCuestionariosIndivDoc(
            FechaInicio,
            FechaFin)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};


export const listCuestionariosIndivCDDocCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            IdCuest
        } = req.body;

        const result = await listCuestionariosIndivCDDoc(
            CodInst,
            IdCuest)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result[0][0],
            details: result[1]
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const listCuestionariosEstudiantesCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin
        } = req.body;     

        const result = await listCuestionariosEstudiantes(
            FechaInicio,
            FechaFin)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};


export const listCuestionariosEstudiantesDetCtrl = async (req,res) => {
    try {    
            
        const {
            CodInst,
            IdCuest,
            Tipo
        } = req.body; 

        const result = await listCuestionariosEstudiantesDet(
            CodInst,
            IdCuest,
            Tipo)                
                          
            return res.status(200).json({
                status: true,
                message: 'Proceso ejecutado correctamente',
                data: result[0][0],
                details: result[1]
            });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

// Resultado Director
export const listCitasDirectorCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin,
            Tipo,
            CodUser
        } = req.body;     

        const result = await listCitasDirector(
            FechaInicio,
            FechaFin,
            Tipo,
            CodUser)  
                    
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

// Seccion Padre de Familia - Estudiante
export const listCuestionariosEstudiantesPadCtrl = async (req,res) => {
    try {    
            
        const {
            FechaInicio,
            FechaFin,
            CodUser
        } = req.body;     

        const result = await listCuestionariosEstudiantesPad(
            FechaInicio,
            FechaFin,
            CodUser)                
                          
        return res.status(200).json({
            status: true,
            message: 'Proceso ejecutado correctamente',
            data: result
        });
          
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};