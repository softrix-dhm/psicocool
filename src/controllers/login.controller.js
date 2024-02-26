import { login } from '../operations/login.operations.js';

export const Login = async (req,res) => {
    try {
        const { user,password,codcarg } = req.body
        const r = await login(user,password,codcarg)  
        
        // console.log(r);

        if(r.length === 0){
            return res.status(400).json({
                status: false,
                message: 'El Usuario y/o Contraseña ingresados son Incorrectos',
                data: ''
            });
        }
        else{
            return res.status(200).json({
                status: true,
                message: 'Autenticacion Correcta Bienvenido',
                data: r
            });
        }        
    } catch (error) {       

        return res.status(500).json({
            status: false,
            message: error.message,
            data: []
        });
    }
};