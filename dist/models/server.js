"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const author_1 = __importDefault(require("../routes/author"));
class Server {
    constructor() {
        this.apiPaths = {
            authors: '/api/authors'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        //Route Definitions
        this.routes();
    }
    // Configuration of Routing Service
    routes() {
        this.app.use(this.apiPaths.authors, author_1.default);
    }
    //Middlewares
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)({}));
        // Body reader
        this.app.use(express_1.default.json());
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