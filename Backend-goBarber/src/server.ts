import 'reflect-metadata';

import express, {Response, Request, NextFunction} from 'express';
import 'express-async-errors';

import routes from './routes';
import updateConfig from './config/upload'
import AppError from './erros/AppError';


import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(updateConfig.directory));
app.use(routes);
/*app.post('/user',(request, response)=> {
    const { name, email} = request.body

    const user = {
        name,
        email
    }
    return response.json(user);

});*/

//Erros depois das rotas

app.use((err: Error, request: Request, response:Response, next:NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:'error',
            message:err.message,
        });
    }

    console.error(err);
    return response.status(500).json({
        status:'error',
        message: 'Internal server error'
    })

});


app.listen(3333, () =>{
    console.log('🚀 Server started on port 3333!!');
});