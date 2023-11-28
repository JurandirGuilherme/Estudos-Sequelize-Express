import express from "express";
import userController from '../controllers/User'
const route = express();

route.get('/', (req,res)=> { userController.findAll(req,res)})
route.post('/cadastrar', (req,res)=> { userController.cadastrar(req,res)})

export default route;