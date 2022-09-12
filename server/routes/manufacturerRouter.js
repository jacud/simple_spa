const Router = require('express');
const manufacturerController = require('../controllers/manufacturerController');
const router = new Router();

router.get('/', manufacturerController.getAll);

router.post('/', manufacturerController.create);

module.exports = router;