import { Router } from "express";
import { deleteAuthor, getAuthor, getAuthors, postAuthor, putAuthor } from "../controllers/author";

const routerAuthor = Router();

routerAuthor.get('/', getAuthors);
routerAuthor.get('/:id', getAuthor);
routerAuthor.post('/', postAuthor);
routerAuthor.put('/', putAuthor);
routerAuthor.delete('/', deleteAuthor);

export default routerAuthor