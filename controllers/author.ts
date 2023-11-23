import { Request, Response } from "express";

export const getAuthors = (req: Request, res: Response) => {


    res.json({
        msg: 'getAuthors',
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