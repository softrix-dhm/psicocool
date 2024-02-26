import { connectMssql } from '../database/mssql.js'
import { create } from 'xmlbuilder2';

export const insCuestionarioDirectorEstudiante = async (
    CodInst,
    CodEst,
    CodNivel,
    CodGrado,
    CodSecc,
    CodUser,
    lstCuestionario
    ) => {
    const pool = await connectMssql()
  
    try {                
        const xmlBuilder = create({ encoding: 'UTF-8' });
        const xml = xmlBuilder.ele('Items'); // Crear el elemento raíz directamente

        for (const item of lstCuestionario) {
            const itemNode = xml.ele('Item');
            itemNode.att('CodParaValo', item.CodParaValo);
            itemNode.att('Estado', item.Estado);
            itemNode.att('CodUser', item.CodUser);            
        }
        const res = xml.end({ prettyPrint: true, headless: true, allowEmpty: true });

        const result = await pool.request()
            .input('CodInst', CodInst)                 
            .input('CodEst', CodEst)                 
            .input('CodNivel', CodNivel)
            .input('CodGrado', CodGrado)
            .input('CodSecc', CodSecc)            
            .input('CodUser', CodUser)                
            .input('XML', res)                 
            .execute('USP_Cuestionario_Director_Estudiante_INS')        
        return result.recordset              
    } catch (ex) {
        throw ex;        
    } finally {
        await pool.close()
    }
};

export const insCuestionarioGeneral = async (
    CodInst,
    CodCarg,
    Tipo,
    CodUser,
    lstCuestionario
    ) => {
    const pool = await connectMssql()
  
    try {                
        const xmlBuilder = create({ encoding: 'UTF-8' });
        const xml = xmlBuilder.ele('Items'); // Crear el elemento raíz directamente

        for (const item of lstCuestionario) {
            const itemNode = xml.ele('Item');
            itemNode.att('CodParaValo', item.CodParaValo);
            itemNode.att('Estado', item.Estado);
            itemNode.att('CodUser', item.CodUser);            
        }
        const res = xml.end({ prettyPrint: true, headless: true, allowEmpty: true });

        const result = await pool.request()
            .input('CodInst', CodInst)                 
            .input('CodCarg', CodCarg)                 
            .input('Tipo', Tipo)                      
            .input('CodUser', CodUser)                
            .input('XML', res)                 
            .execute('USP_Cuestionario_INS')        
        return result.recordset              
    } catch (ex) {
        throw ex;        
    } finally {
        await pool.close()
    }
};

export const insCuestionarioDocente = async (
    CodInst,
    CodNivel,
    CodGrado,
    CodSecc,    
    CodUser,
    lstCuestionario
    ) => {
    const pool = await connectMssql()
  
    try {                
        const xmlBuilder = create({ encoding: 'UTF-8' });
        const xml = xmlBuilder.ele('Items'); // Crear el elemento raíz directamente

        for (const item of lstCuestionario) {
            const itemNode = xml.ele('Item');
            itemNode.att('CodParaValo', item.CodParaValo);
            itemNode.att('Estado', item.Estado);
            itemNode.att('CodUser', item.CodUser);            
        }
        const res = xml.end({ prettyPrint: true, headless: true, allowEmpty: true });

        const result = await pool.request()
            .input('CodInst', CodInst)                 
            .input('CodNivel', CodNivel)                 
            .input('CodGrado', CodGrado)                 
            .input('CodSecc', CodSecc)                             
            .input('CodUser', CodUser)                
            .input('XML', res)                 
            .execute('USP_Cuestionario_Doc_INS')        
        return result.recordset              
    } catch (ex) {
        throw ex;        
    } finally {
        await pool.close()
    }
};

export const listCuestionariosGrupDoc = async (FechaInicio,FechaFin) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                
            .execute('USP_Cuestionarios_Grupales_Docentes_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosGrupCDDoc = async (CodInst,IdCuest) => {
    const pool = await connectMssql()
  
    try {               
        const result = await pool.request()   
            .input('CodInst', CodInst)                                
            .input('IdCuest', IdCuest)                                
            .execute('USP_Cuestionarios_Grupales_Docentes_CD_SEL')
            return result.recordsets   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const insCuestionarioFile = async (
    CodInst,
    IdCuest,
    NomFile    
    ) => {
    const pool = await connectMssql()
  
    try {                
        
        const result = await pool.request()
            .input('CodInst', CodInst)                 
            .input('IdCuest', IdCuest)                 
            .input('NomFile', NomFile)                                               
            .execute('USP_Cuestionario_FILE_INS')        
        return result.recordset              
    } catch (ex) {
        throw ex;        
    } finally {
        await pool.close()
    }
};

// Cuestionario Grupales Docentes
export const updCuestionarioCab = async (
    CodInst, IdCuest, Tipo
    ) => {
    const pool = await connectMssql()
  
    try {
        console.log(Tipo);
        const result = await pool.request()
            .input('CodInst', CodInst)
            .input('IdCuest', IdCuest)                        
            .input('Tipo', Tipo) 
            .execute('USP_CuestionarioCab_UPD')        
            return result.recordset   
    } catch (ex) {               
        throw ex;
    } finally {
        await pool.close()
    }
}

export const listCuestionariosGrupEst = async (FechaInicio,FechaFin) => {
    const pool = await connectMssql()
      
    try {        
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                
            .execute('USP_Cuestionarios_Grupales_Estudiantes_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosGrupCDEst = async (CodInst,IdCuest) => {
    const pool = await connectMssql()
  
    try {               
        const result = await pool.request()   
            .input('CodInst', CodInst)                                
            .input('IdCuest', IdCuest)                                
            .execute('USP_Cuestionarios_Grupales_Estudiantes_CD_SEL')
            return result.recordsets   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosIndivDoc = async (FechaInicio,FechaFin) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                
            .execute('USP_Cuestionarios_Individuales_Docentes_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosIndivCDDoc = async (CodInst,IdCuest) => {
    const pool = await connectMssql()
  
    try {               
        const result = await pool.request()   
            .input('CodInst', CodInst)                                
            .input('IdCuest', IdCuest)                                
            .execute('USP_Cuestionarios_Individuales_Docentes_CD_SEL')
            return result.recordsets   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosEstudiantes = async (FechaInicio,FechaFin) => {
    const pool = await connectMssql()
  
    try {               
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                   
            .execute('USP_Cuestionarios_Estudiantes_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

export const listCuestionariosEstudiantesDet = async (CodInst,IdCuest,Tipo) => {
    const pool = await connectMssql()
  
    try {               
        console.log(Tipo);
        const result = await pool.request()   
            .input('CodInst', CodInst)                                
            .input('IdCuest', IdCuest)                                
            .input('Tipo', Tipo)  
            .execute('USP_Cuestionarios_Estudiantes_DET_SEL')
            return result.recordsets   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

// Resultado Director

export const listCitasDirector = async (FechaInicio,FechaFin,Tipo,CodUser) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                
            .input('Tipo', Tipo)   
            .input('CodUser', CodUser)   
            .execute('USP_Cuestionarios_resultados_director_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};

// Seccion Padre de Familia - Estudiante
export const listCuestionariosEstudiantesPad = async (FechaInicio,FechaFin,CodUser) => {
    const pool = await connectMssql()
  
    try {               
        const result = await pool.request()   
            .input('FechaInicio', FechaInicio)                                
            .input('FechaFin', FechaFin)                                   
            .input('CodUser', CodUser)                                   
            .execute('USP_Cuestionarios_EstudiantesPad_SEL')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
};
