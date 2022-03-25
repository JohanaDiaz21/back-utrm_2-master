import express  from 'express';
import {UserModel} from "../models/user.model.js";
import {userController} from "../controllers/user.controller.js";

 class routes{
    routes(app= express.application){
        //aqui declaran todas las rutas

        app.get( '/', ( req, res ) => {
            res.send( "Hola Mundo!" );
        });

        app.get('/say-hello',userController.sayhello);
        app.post('/get-users',userController.getUsers);
        app.post('/api/login',userController.getUsers);
        //app.get('/getUsers',userController.getUsers);
        //app.get('/getUsers',userController.getUsers);
        app.post('/api/load-conversation',userController.loadConversation);
        app.post('/api/save-message',userController.saveMessage);
        app.post('/api/create-user',userController.createUser);



        app.post('/data', (req, res) => {
            const data = req.body;
            console.log('data from front', data);

            for(let i in data.books) {
                console.log('Libros leidos -> ', data.books[i].name );
            }

            res.json({
                ok: true,
                message: 'data recieved'
            });
        });

    }
}
export const Routes = new routes();
