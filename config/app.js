import dotenv from 'dotenv';
import express  from 'express';
import http  from 'http';
import {Database} from './database.js';
import {Routes} from "../routes/routes.js";
import cors from 'cors';
import { SocketIo} from "../socket/socket.js";
import { Server } from 'socket.io';

// inicio config

dotenv.config();

class App{

app = express.application;
db = new Database();
socket = new SocketIo();
Http = null;


  constructor() {
      this.initializeApp();
  }

async initializeApp(){
      this.app = express();
      this.config();
      this.Http = http.createServer(this.app)
      await this.database();
      Routes.routes(this.app);
      this.socket.startSocket(this.Http)
  }

  config(){
      this.app.use(
          express.urlencoded({
              extended: true
          }));
      this.app.use(express.json());

      this.app.use(cors({origin: '*'}));
      }

      // conecion a la base de datos
      async database() {
          let connection = await this.db.connection();
          console.log(connection.message)
      }

}
export default new App();
