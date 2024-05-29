import { Request, Response } from "express";
import Usuario from "../../models/Usuario";
import { messageResponse } from "../../helpers/responses";
import bcrypt from 'bcrypt'

export const register = async (req:Request,res:Response)=>{

  let {id,userName,password,name,email,token,phone,address,contact,phoneContact} = req.body
  
  // 
  try {
    // verificar si el usuario existe
    const user = await Usuario.findOne({where: {userName}})
    if (user) return res.status(200).send(messageResponse(false, 'El usuario ya está registrado'))
    
    // creacion de usuario
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    

    await Usuario.create({id,userName,password,name,email,token,phone,address,contact,phoneContact})

    res.status(200).send(messageResponse(true,'Registro exitoso'))

  } catch (error) {
    res.status(500).send(error)
  }

}