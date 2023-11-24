import express, { Application } from 'express'
import cors from 'cors'
import routerAuthor from '../routes/author';
import db from '../db/connection';
import routerInstitution from '../routes/institution';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = { 
        authors: '/api/authors',
        institutions: '/api/institutions',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        //Metodos
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    // Configuration of Routing Service
    routes() {
        this.app.use( this.apiPaths.institutions, routerInstitution)
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
        this.app.use(cors({
            origin: 'http://localhost:4200', // Cambia esto por el origen correcto de tu aplicación Angular
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: ['Content-Type', 'X-Custom-Header'], 
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true
          }));
          
          this.app.options('*', cors({
            origin: 'http://localhost:4200', // Cambia esto por el origen correcto de tu aplicación Angular
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'X-Custom-Header',
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true
          }));

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