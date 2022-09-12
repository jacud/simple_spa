const Router = require('express');
const productCategoryController = require('../controllers/productCategoryController');
const router = new Router();

router.get('/', productCategoryController.getAll);

router.post('/', productCategoryController.create);

module.exports = router;