import { connectMssql } from '../database/mssql.js'

export const login = async (user, password, codcarg) => {
    const pool = await connectMssql()
  
    try {        
        const result = await pool.request()
            .input('User', user)
            .input('Pass', password)            
            .input('CodCarg', codcarg) 
            .execute('USP_Logeo')               
            return result.recordset   
    } catch (ex) {               
        throw ex;
    } finally {
        await pool.close()
    }
}