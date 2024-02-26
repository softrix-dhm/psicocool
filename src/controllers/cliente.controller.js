import { listClientes, insClientes, updClientes, delClientes } from '../operations/cliente.operations.js';

export const Cliente = async (req,res) => {
    try {        
        const lstClientes = await listClientes()                

        return res.status(200).json(lstClientes);  
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const CtrlInsCliente = async (req,res) => {
    try {    
        const { 
            Ruc,
            RazonSocial,
            Direccion,
            DistritoId,
            Telefono1,
            Telefono2 } = req.body

        const Res = await insClientes(
            Ruc,
            RazonSocial,
            Direccion,
            DistritoId,
            Telefono1,
            Telefono2
        )                                        

        if(Res === undefined){
            return res.status(200).json({
                status: true,
                message: 'Cliente Registrado Correctamente',
                data: ""
            });  
        }
        else{                      
            return res.status(400).json({
                status: false,
                message: Res,
                data: ""
            });  
        }        
    } catch (error) {        
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const CtrlUpdCliente = async (req,res) => {
    try {        
        const { 
            Ruc,
            RazonSocial,
            Direccion,
            DistritoId,
            Telefono1,
            Telefono2 } = req.body

        const Res = await updClientes(
            Ruc,
            RazonSocial,
            Direccion,
            DistritoId,
            Telefono1,
            Telefono2
        )                              

        if(Res === undefined){
            return res.status(200).json({
                status: true,
                message: 'Cliente Modificado Correctamente',
                data: ""
            });  
        }
        else{                      
            return res.status(400).json({
                status: false,
                message: Res,
                data: ""
            });  
        }    
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

export const CtrlDelCliente = async (req,res) => {
    try {        
        const { Ruc } = req.body
        const Res = await delClientes(Ruc)                

        if(Res === undefined){
            return res.status(200).json({
                status: true,
                message: 'Cliente Eliminado Correctamente',
                data: ""
            });  
        }
        else{                      
            return res.status(400).json({
                status: false,
                message: Res,
                data: ""
            });  
        }    
    } catch (error) {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};