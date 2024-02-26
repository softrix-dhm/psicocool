import { connectMssql } from '../database/mssql.js'

export const listProductos = async (GrupoId) => {
    const pool = await connectMssql()
  
    try {
        const result = await pool.request()   
            .input('GrupoId', GrupoId)                                
            .execute('SP_SEL_ProductoPorGrupo')
            return result.recordset   
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}