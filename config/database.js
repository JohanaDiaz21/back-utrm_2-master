import{Sequelize} from 'sequelize';
import dotenv from "dotenv";

// inicializacion de configuracion
dotenv.config();

export const database = new Sequelize({
    host:process.env.DB_HOST,
    database: process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    dialect:'mysql',
    timezone:'-05:00',
    port: +process.env.DB_PORT,
    logging: false,
    Pool:{
        max:5,
        min:5,
        acquire: 60000,
        idle: 15000
    },


});

export class Database{

    async connection(){
        try {
            await database.authenticate();
            return {
                ok: true, message: 'conectividad correcta '}
            }catch (e){
            return {ok:false, message:' no se pudo conectrar revisa tu conexion'}
        }
    }
}
