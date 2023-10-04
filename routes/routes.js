import express from 'express'
import { ValidatePassword } from '../services/validate-pass.js';
export const router = express.Router();


router.post("/validate-password", (req,res)=>{

    const password = req.body.password;

    const validate = ValidatePassword(password)

    return res.status( validate.status ? 200 : 400).json(validate.status ? {"Senha forte":password} : {"error": validate.error});

})