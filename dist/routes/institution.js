"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institution_1 = require("../controllers/institution");
const routerInstitution = (0, express_1.Router)();
routerInstitution.get('/', institution_1.getInstitutions);
exports.default = routerInstitution;
//# sourceMappingURL=institution.js.map