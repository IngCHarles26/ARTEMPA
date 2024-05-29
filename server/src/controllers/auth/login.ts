import { Request, Response } from "express"
import Usuario from "../../models/Usuario"
import { messageResponse } from "../../helpers/responses"
import bcrypt from 'bcrypt'
import { genToken } from "../../helpers/help"

export const login = async (req:Request,res:Response)=>{

  try {
    
    const {userName,password} = req.body

    const user = await Usuario.findOne({where:{userName}})
    
    if(!user) return res.status(200).send(messageResponse(false,'Usuario no encontrado'))
    
    const {password:passDB} = user

    const val = bcrypt.compareSync(password,passDB)

    if (!val) return res.status(200).send(messageResponse(false,'Contraseña incorrecta'))

    const token = genToken()
    user.token = token
    user.limitToken = Date.now()+28800000
    await user.save()

    res.status(200).send({token,...messageResponse(true,'Login exitoso')})

  } catch (error) {
    res.status(500).send(error)
  }


}