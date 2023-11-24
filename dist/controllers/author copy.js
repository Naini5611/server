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
exports.deleteAuthor = exports.putAuthor = exports.postAuthor = exports.getAuthor = exports.getAuthors = void 0;
const author_1 = __importDefault(require("../models/author"));
const institucion_1 = __importDefault(require("../models/institucion"));
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield author_1.default.findAll({
            include: {
                model: institucion_1.default
            }
        });
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json({
            msg: 'getAuthors',
            data: authors
        });
    }
    catch (error) {
        console.log("🚀 ~ file: author.ts:20 ~ getAuthors ~ error:", error);
        throw new Error('Ocurrio un error mientras se leian los authores');
    }
});
exports.getAuthors = getAuthors;
const getAuthor = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getAuthor',
        id
    });
};
exports.getAuthor = getAuthor;
const postAuthor = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postAuthor',
        body
    });
};
exports.postAuthor = postAuthor;
const putAuthor = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putAuthor',
        body
    });
};
exports.putAuthor = putAuthor;
const deleteAuthor = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteAuthor',
        id
    });
};
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=author%20copy.js.map