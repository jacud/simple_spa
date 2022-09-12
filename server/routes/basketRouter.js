const Router = require('express');
const basketController = require('../controllers/basketController');
const router = new Router();

router.get('/', basketController.get);

router.post('/', basketController.create);

module.exports = router;