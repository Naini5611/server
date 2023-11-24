"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const author_1 = __importDefault(require("../routes/author"));
const connection_1 = __importDefault(require("../db/connection"));
const institution_1 = __importDefault(require("../routes/institution"));
class Server {
    constructor() {
        this.apiPaths = {
            authors: '/api/authors',
            institutions: '/api/institutions',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        //Metodos
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    // Configuration of Routing Service
    routes() {
        this.app.use(this.apiPaths.institutions, institution_1.default);
        this.app.use(this.apiPaths.authors, author_1.default);
    }
    //DB Configuration
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //Middlewares
    middlewares() {
        // Body reader
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        //CORS
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:4200', // Cambia esto por el origen correcto de tu aplicación Angular
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: ['Content-Type', 'X-Custom-Header'],
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true
        }));
        this.app.options('*', (0, cors_1.default)({
            origin: 'http://localhost:4200', // Cambia esto por el origen correcto de tu aplicación Angular
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'X-Custom-Header',
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true
        }));
        // public folder
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port: ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map