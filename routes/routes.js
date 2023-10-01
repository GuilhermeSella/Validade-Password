import express from 'express'
import { ValidatePassword } from '../services/validate-pass.js';
export const router = express.Router();


router.post("/validate-password", (req,res)=>{
    const password = req.body.password

    

})