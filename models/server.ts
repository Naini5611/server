import express, { Application } from 'express'
import cors from 'cors'
import routerAuthor from '../routes/author';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        authors: '/api/authors'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        //Route Definitions
        this.routes();
    }

    // Configuration of Routing Service
    routes() {
        this.app.use( this.apiPaths.authors, routerAuthor)
    }

    //Middlewares
    middlewares() {
        //CORS
        this.app.use(cors({}));

        // Body reader
        this.app.use(express.json());

        // public folder
        this.app.use( express.static('public'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port: ' + this.port);
        });
    }
}

export default Server;