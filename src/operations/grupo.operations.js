import { connectMssql } from '../database/mssql.js'

export const listGrupos = async () => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request()                                   
            .execute('SP_SEL_GrupoProducto')
            return result.recordset   
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}