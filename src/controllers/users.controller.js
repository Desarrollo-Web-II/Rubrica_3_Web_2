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
            const token = jwt.sign(token_payload, 'SecretKey', {expiresIn:'100s'})
            console.log(token)
            res.cookie('jwt',token, {httpOnly: true, maxAge: 300000})
            res.status(200).json({message: 'Inicio de sesion exitoso'})
        } else {
            res.status(401).json({error: 'Valores invalidos'})
        }
    } catch (error) {
        res.status(500).json({message: 'Ha ocurrido un error'})
    }
    
}