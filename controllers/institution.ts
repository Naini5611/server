import { Request, Response } from "express";
import Institucion from "../models/institucion";

export const getInstitutions = async (req: Request, res: Response) => {
    try {

        const data = await Institucion.findAll();

        res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
        res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
        res.json({
            msg: 'getInstitutions',
            data
        })
    } catch (error) {
        throw new Error('Ocurrio un error mientras se leian Instituciones');
    }

}