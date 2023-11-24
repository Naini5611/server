import { Request, Response } from "express";
import Author from "../models/author";
import Institucion from "../models/institucion";

export const getAuthors = async (req: Request, res: Response) => {
    try {
        
        const authors = await Author.findAll({
            include: {
                model: Institucion
            }
        });
    
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
        res.json({
            msg: 'getAuthors',
            data: authors
        })
    } catch (error) {
        console.log("🚀 ~ file: author.ts:20 ~ getAuthors ~ error:", error)
        throw new Error('Ocurrio un error mientras se leian los authores') ;
    }

}

export const getAuthor = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getAuthor',
        id
    })
}

export const postAuthor = (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')

    try {
        const { body } = req;

        const data = Author.create({ ...body })
        res.json({
            msg: 'postAuthor',
            data
        })
    } catch (error) {
        console.log("🚀 ~ file: author.ts:47 ~ postAuthor ~ error:", error)
    }
}

export const putAuthor = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putAuthor',
        body
    })
}


export const deleteAuthor = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteAuthor',
        id
    })
}