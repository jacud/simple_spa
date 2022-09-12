const Router = require('express');
const productCategoryController = require('../controllers/productCategoryController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.get('/', productCategoryController.getAll);

router.post('/', checkRoleMiddleware('ADMIN'), productCategoryController.create);

module.exports = router;