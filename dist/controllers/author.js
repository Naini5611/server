"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.putAuthor = exports.postAuthor = exports.getAuthor = exports.getAuthors = void 0;
const getAuthors = (req, res) => {
    res.json({
        msg: 'getAuthors',
    });
};
exports.getAuthors = getAuthors;
const getAuthor = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getAuthor',
        id
    });
};
exports.getAuthor = getAuthor;
const postAuthor = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postAuthor',
        body
    });
};
exports.postAuthor = postAuthor;
const putAuthor = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putAuthor',
        body
    });
};
exports.putAuthor = putAuthor;
const deleteAuthor = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteAuthor',
        id
    });
};
exports.deleteAuthor = deleteAuthor;
//# sourceMappingURL=author.js.map