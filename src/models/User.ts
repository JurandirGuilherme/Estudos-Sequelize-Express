import { Model, DataTypes, DataType } from "sequelize"
import {sequelize} from "../conn/conn"

class User extends Model{
    declare id: Number;
    declare firstName: String;
    declare lastName: String;
    declare corFavorita: String;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    corFavorita:{
        type: DataTypes.STRING,
        defaultValue: "Verde"
    }
},{
    sequelize,
    timestamps:true,
    createdAt: true,
    updatedAt:true
})

await sequelize.sync();

export {User};