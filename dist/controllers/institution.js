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
exports.getInstitutions = void 0;
const institucion_1 = __importDefault(require("../models/institucion"));
const getInstitutions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield institucion_1.default.findAll();
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.json({
            msg: 'getInstitutions',
            data
        });
    }
    catch (error) {
        throw new Error('Ocurrio un error mientras se leian Instituciones');
    }
});
exports.getInstitutions = getInstitutions;
//# sourceMappingURL=institution.js.map