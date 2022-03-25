import  App from './config/app.js'

// puerto de escucha para la ap
const port = process.env.APP_PORT || 8081; // default
//App.app.listen(port,() =>console.log(`API esta corriedo.port:${ port }`));

App.Http.listen (port,() =>console.log(`API esta corriedo.port:${ port }`));

