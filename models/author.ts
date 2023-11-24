import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Institucion, { IInstitucion } from './institucion';

const Author = db.define('autor', {
    id: { field: 'idAutor', type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    activo: { type: DataTypes.BOOLEAN },
    modificado: { type: DataTypes.DATE },
    idInstitucion: {type: DataTypes.INTEGER},
}, {
    tableName: 'autor',
    timestamps: false
});

Author.hasOne(Institucion, {
    foreignKey: 'idInstitucion', // Clave externa en el modelo Author
    sourceKey: 'idInstitucion' // Clave primaria en el modelo Institucion
});

export default Author
export interface IAuthor {
    id?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    activo: boolean;
    modificado?: Date
    idInstitucion?: Date
    institucion?: IInstitucion
}