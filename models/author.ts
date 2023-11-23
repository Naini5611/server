import { DataTypes } from 'sequelize'
import db from '../db/connection'

export const Author = db.define('autor', {
    id: { field: 'idAutor', type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    activo: { type: DataTypes.BOOLEAN },
    modificado: { type: DataTypes.DATE },
    // dInstitucion: {type: DataTypes.INTEGER},
}, {
    tableName: 'autor',
    timestamps: false 
}
)

export interface IAuthor {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    activo: boolean;
    nodificado: Date
}