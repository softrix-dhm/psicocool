import { connectMssql } from '../database/mssql.js'

export const listNivel = async (CodInst) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('CodInst', CodInst)                                
            .execute('USP_Nivel')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
}

export const listGrado = async (CodNivel) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('CodNivel', CodNivel)                                
            .execute('USP_Grado')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
}

export const listSeccion = async (CodNivel,CodGrado) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('CodNivel', CodNivel)                                
            .input('CodGrado', CodGrado)     
            .execute('USP_Seccion')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
}

export const listEstudiantes = async (CodInst,CodNivel,CodGrado,CodSecc) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('CodInst', CodInst)      
            .input('CodNivel', CodNivel)                                
            .input('CodGrado', CodGrado)     
            .input('CodSecc', CodSecc)     
            .execute('USP_Estudiantes')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
}
export const lstCuestionario = async (CodPara) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()   
            .input('CodPara', CodPara)                    
            .execute('USP_Cuestionarios')
            return result.recordset   
    } catch (ex) {        
        throw ex;
    } finally {
        await pool.close()
    }
}