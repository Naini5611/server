"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_1 = require("../controllers/author");
const routerAuthor = (0, express_1.Router)();
routerAuthor.get('/', author_1.getAuthors);
routerAuthor.get('/:id', author_1.getAuthor);
routerAuthor.post('/', author_1.postAuthor);
routerAuthor.put('/', author_1.putAuthor);
routerAuthor.delete('/', author_1.deleteAuthor);
exports.default = routerAuthor;
//# sourceMappingURL=author.js.map