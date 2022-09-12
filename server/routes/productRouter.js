const Router = require('express');
const productController = require('../controllers/productController');
const router = new Router();

router.get('/:id', productController.getById);
router.get('/', productController.getAll);
router.post('/', productController.create);

module.exports = router;