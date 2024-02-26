import { connectMssql } from '../database/mssql.js'

export const listTrabEmpresas = async (Rucs, CodUnid, NroDias, Usuario) => {
    const pool = await connectMssql()
    try {
        const result = await pool.request()
            .input('Rucs', Rucs)
            .input('CodUnid', CodUnid)
            .input('NroDias', NroDias) 
            .input('Usuario', Usuario)                       
            .execute('Nomina.USP_SEL_AltasBajasTrabTrackin')
        return result.recordset
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}
