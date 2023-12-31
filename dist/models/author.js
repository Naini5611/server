"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const institucion_1 = __importDefault(require("./institucion"));
const Author = connection_1.default.define('autor', {
    id: { field: 'idAutor', type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    nombre: { type: sequelize_1.DataTypes.STRING },
    apellido: { type: sequelize_1.DataTypes.STRING },
    direccion: { type: sequelize_1.DataTypes.STRING },
    activo: { type: sequelize_1.DataTypes.BOOLEAN },
    modificado: { type: sequelize_1.DataTypes.DATE },
    idInstitucion: { type: sequelize_1.DataTypes.INTEGER },
}, {
    tableName: 'autor',
    timestamps: false
});
Author.hasOne(institucion_1.default, {
    foreignKey: 'idInstitucion', // Clave externa en el modelo Author
    sourceKey: 'idInstitucion' // Clave primaria en el modelo Institucion
});
exports.default = Author;
//# sourceMappingURL=author.js.map