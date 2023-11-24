import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Author from './author';

const Institucion = db.define('institucion', {
    idInstitucion: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    activo: { type: DataTypes.BOOLEAN },
}, {
    tableName: 'institucion',
    timestamps: false
});


export default Institucion;

export interface IInstitucion {
    idInstitucion?: number;
    nombre: string;
    activo: boolean;
}