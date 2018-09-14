/**
 * @author Maria Fernanda Serna
 * Using Rails-like standard naming convention for endpoints.
 */

const Service = require('./scrap.service');

function respondWithResult(res, statusCode) {
    const statusCodeLocal = statusCode || 200;
    return (entity) => {
        if (entity) {
            res.status(statusCodeLocal).json(entity);
        }
        return null;
    };
}

function handleEntityNotFound(res) {
    return (entity) => {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    const statusCodeLocal = statusCode || 500;
    return (err) => {
        res.status(statusCodeLocal).send(err);
    };
}

function find(req, res) {
    const {
        name
    } = req.params;
    return Service.find(name)
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

module.exports = {
    find
};