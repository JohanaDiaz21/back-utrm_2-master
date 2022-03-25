import {Model , DataTypes} from 'sequelize';
import {database} from "../config/database.js";

export class UserModel extends Model{}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    socket_id:{
        type:  DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.INTEGER
    },
    updatedAt: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    online: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize:database,
    tableName: 'user',
    timestamps: false,
},)
