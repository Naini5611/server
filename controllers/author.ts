import { Request, Response } from "express";
import { Author } from "../models/author";

export const getAuthors = async (req: Request, res: Response) => {

    const authors = await Author.findAll();

    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.json({
        msg: 'getAuthors',
        data: authors
    })
}

export const getAuthor = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getAuthor',
        id
    })
}

export const postAuthor = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postAuthor',
        body
    })
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