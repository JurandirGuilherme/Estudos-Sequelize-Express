import { Sequelize } from "sequelize";

const sequelize = new Sequelize('test', 'root', 'estud0s@ts',{
    host: "172.19.238.200",
    port: 3326,
    dialect: "mysql"
} )

try{
    await sequelize.authenticate()
    await sequelize.sync({force:true});
    console.log("Banco Conectado")
}catch(e){
    console.log(e)
}

await sequelize.sync({force:true});



export {sequelize};