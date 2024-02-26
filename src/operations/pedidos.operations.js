import { connectMssql } from '../database/mssql.js'
import { create } from 'xmlbuilder2';

export const PedidosIns = async (
    total,
    subTotal,
    igv,
    clienteId,
    localId,
    periodoId,
    usuario,
    vendedor,
    tipo,
    valIP,
    tipoComId,
    formPagId,
    lstProducts) => {
    const pool = await connectMssql()
    try {                
        const xmlBuilder = create({ encoding: 'UTF-8' });
        const xml = xmlBuilder.ele('Items'); // Crear el elemento raíz directamente

        for (const item of lstProducts) {
            const itemNode = xml.ele('Item');
            itemNode.att('Cantidad', item.cantidad);
            itemNode.att('Codigo', item.codigo);
            itemNode.att('Descripcion', item.descripcion);
            itemNode.att('Precio', item.precio);
            itemNode.att('Stock', item.stock);
        }
        const res = xml.end({ prettyPrint: true, headless: true, allowEmpty: true });

        const result = await pool.request()
            .input('Total', total)                 
            .input('SubTotal', subTotal)                 
            .input('Igv', igv)
            .input('ClienteId', clienteId)
            .input('LocalId', localId)
            .input('PeriodoId', periodoId)
            .input('Usuario', usuario)
            .input('Vendedor', vendedor)
            .input('Tipo', tipo)
            .input('ValIP', valIP)            
            .input('TipoComId', tipoComId)     
            .input('FormPagId', formPagId)     
            .input('XML', res)                 
            .execute('SP_INS_PEDIDO')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const PedidosSel = async (VendedorId,FechaPedido,Local,Estado) => {
    const pool = await connectMssql()
    try {                                
        const result = await pool.request()
            .input('VendedorId', VendedorId)                                    
            .input('FechaPedido', FechaPedido)
            .input('Local', Local)
            .input('Estado', Estado)
            .execute('SP_SEL_PEDIDOS')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const PedidosDel = async (PedidoId) => {
    const pool = await connectMssql()
    try {                                
        const result = await pool.request()
            .input('PedidoId', PedidoId)                                                
            .execute('SP_DEL_PEDIDOS')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const TipoComprobanteSel = async () => {
    const pool = await connectMssql()
    try {                        
        const result = await pool.request()                                              
            .execute('ComPTipoDocumentoSelDosColApi')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const FormaPagoSel = async () => {
    const pool = await connectMssql()
    try {                        
        const result = await pool.request()                                              
            .execute('ComPFormaPagoSelDosColApi')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}

export const LocalSel = async () => {
    const pool = await connectMssql()
    try {                        
        const result = await pool.request()                                              
            .execute('RepPLocalSelDosColApi')
        return result.recordset              
    } catch (ex) {
        console.log(ex)
        return []
    } finally {
        await pool.close()
    }
}
