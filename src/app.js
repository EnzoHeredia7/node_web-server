import {envs} from './config/env.js'
//const {envs} = require('./config/env') forma anterior
import {startServer} from './server/server.js'
//const {startServer} = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })


    
}



//funcion agnostica autoconvocada
// agnostica porque no tiene nombre
//autoconvocada porque la ejectuamos con los parentesis
(async()=>{
    main() 
})()