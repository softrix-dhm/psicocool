import { connectMssql } from '../database/mssql.js'

export const listClientes = async () => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request()                                   
            .execute('SP_SEL_Clientes')
            return result.recordset   
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const insClientes = async (
    Ruc,
    RazonSocial,
    Direccion,
    DistritoId,
    Telefono1,
    Telefono2
) => {
    const pool = await connectMssql()      

    try {
        const result = await pool.request()  
            .input('Ruc', Ruc)                                    
            .input('RazonSocial', RazonSocial) 
            .input('Direccion', Direccion) 
            .input('DistritoId', DistritoId) 
            .input('Telefono1', Telefono1) 
            .input('Telefono2', Telefono2)                                 
            .execute('SP_INS_Clientes')
            return result.recordset   
    } catch (ex) {        
        return ex.message
    } finally {
        await pool.close()
    }
}

export const updClientes = async (
    Ruc,
    RazonSocial,
    Direccion,
    DistritoId,
    Telefono1,
    Telefono2
) => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request() 
            .input('Ruc', Ruc)                                    
            .input('RazonSocial', RazonSocial) 
            .input('Direccion', Direccion) 
            .input('DistritoId', DistritoId) 
            .input('Telefono1', Telefono1) 
            .input('Telefono2', Telefono2)
            .execute('SP_UPD_Clientes')
            return result.recordset   
    } catch (ex) {
        return ex.message
    } finally {
        await pool.close()
    }
}

export const delClientes = async (Ruc) => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request() 
            .input('Ruc', Ruc)                                  
            .execute('SP_DEL_Clientes')
            return result.recordset   
    } catch (ex) {
        return ex.message
    } finally {
        await pool.close()
    }
}