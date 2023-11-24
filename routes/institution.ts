import { Router } from "express";
import { getInstitutions } from "../controllers/institution";

const routerInstitution = Router();

routerInstitution.get('/', getInstitutions);

export default routerInstitution