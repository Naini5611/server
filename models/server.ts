import express, { Application } from 'express'
import cors from 'cors'
import routerAuthor from '../routes/author';
import db from '../db/connection';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        authors: '/api/authors'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        //Metodos
        this.routes();
        this.middlewares();
        this.dbConnection();
    }

    // Configuration of Routing Service
    routes() {
        this.app.use( this.apiPaths.authors, routerAuthor)
    }
    
    //DB Configuration
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database Online')
        } catch (error: any) {
            throw new Error(error)
        }
    }

    //Middlewares
    middlewares() {

        // Body reader
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        //CORS
        this.app.use(cors());

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