/**
 * @author Maria Fernanda Serna
 * Scrap
 */

const Router = require('express').Router;
const controller = require('./scrap.controller');

const router = new Router();

router.get('/find/:name', controller.find);

module.exports = router;