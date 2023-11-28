import { User } from "./models/User"
import express  from 'express'
import Router from "./routes/Router";

const app = express();
app.use(express.json())
app.use('/api', Router)



app.listen(3000, ()=>{
    console.log("Rodou na porta 3000")
})
