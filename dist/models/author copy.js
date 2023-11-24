"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Author = connection_1.default.define('autor', {
    id: { field: 'idAutor', type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    nombre: { type: sequelize_1.DataTypes.STRING },
    apellido: { type: sequelize_1.DataTypes.STRING },
    direccion: { type: sequelize_1.DataTypes.STRING },
    activo: { type: sequelize_1.DataTypes.BOOLEAN },
    modificado: { type: sequelize_1.DataTypes.DATE },
    // dInstitucion: {type: DataTypes.INTEGER},
}, {
    tableName: 'autor',
    timestamps: false
});
//# sourceMappingURL=author%20copy.js.map