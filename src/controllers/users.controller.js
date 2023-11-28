import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        res.send(rows)
    } catch (error) {
        res.status(500).json({message: 'Ha ocurrido un Error'})
    }
}

export const login = async (req, res) =>{
    try {
        console.log(req.body)
        const {email, password} = req.body;
        const [result] = await pool.query( 'SELECT * FROM users WHERE email=? AND password=?',[email, password],(error)=>{
            if (error) {
                res.status(500).json({error: 'Error de servidor'})
                console.error(error)
            }
        })
        if (result.length > 0) {
            const token_payload = {
                id: result[0].id,
                name: result[0].name,
                email: email,
                type: result[0].type
            }
            //console.log(token_payload)
            const token = jwt.sign(token_payload, 'SecretKey', {expiresIn:'100s'})
            //console.log(token)
            //res.cookie('prueba',token, {httpOnly: true, maxAge: 300000, secure: false})
            const data = {
                type: result[0].type,
                token: token
            }
            //res.cookie('prueba','hello world', {httpOnly: false, maxAge: 300000, secure: false})
            //res.cookie('cookie_name' , 'cookie_value').send(valores).status(200);
            res.status(200).json({message: 'Inicio de sesion exitoso', data: data})
        } else {
            res.status(401).json({error: 'Valores invalidos'})
        }
    } catch (error) {
        res.status(500).json({message: 'Ha ocurrido un error'})
    }
    
}