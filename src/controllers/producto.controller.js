import { listProductos } from '../operations/producto.operations.js';

export const Producto = async (req,res) => {
    try {    
            
        const {
            GrupoId
        } = req.body;

        const lstProductos = await listProductos(GrupoId)                

        return res.status(200).json(lstProductos);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};