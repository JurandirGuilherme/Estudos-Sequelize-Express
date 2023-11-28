import { User } from "../models/User";
import { Request, Response } from "express";


class UserController{

    async findAll(req:Request, res:Response){
        const user = await User.findAll();
        res.json(user);
    }
    
    async cadastrar(req:Request, res:Response){
        try{
            const {nome, sobrenome, corfavorita} =  req.body
    
            const user = await User.create({
                firstName: nome,
                lastName: sobrenome,
                corfavorita
            })
            res.json({user, msg:"Usuário criador com sucesso"})
        }catch(e){
            res.json("Ocorreu um error")
            console.log(e)
        }
    }
    
}

const userController = new UserController();

export default userController;