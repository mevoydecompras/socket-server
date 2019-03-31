// import { SERVER_PORT } from './global/environment';
import Server from "./classes/server";
import router from "./routes/router";

import bodyParser from 'body-parser';

import cors from 'cors';

const server = new Server();

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
// pasar la información a un formato JSON
server.app.use( bodyParser.json() );


// Configurar cors  para que cualquier persona pueda llamar al servicio
server.app.use( cors({ origin:true, credentials: true }))

// Rutas de servicios
server.app.use('/', router);



// se puede utilizar de las dos maneras
 server.start( () =>{
 // console.log(`Servidor Corriendo en el puerto ${ SERVER_PORT }`);
 console.log(`Servidor Corriendo en el puerto ${ server.port }`); 

 });