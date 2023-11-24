"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Institucion = connection_1.default.define('institucion', {
    idInstitucion: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    nombre: { type: sequelize_1.DataTypes.STRING },
    activo: { type: sequelize_1.DataTypes.BOOLEAN },
}, {
    tableName: 'institucion',
    timestamps: false
});
exports.default = Institucion;
//# sourceMappingURL=institucion.js.map