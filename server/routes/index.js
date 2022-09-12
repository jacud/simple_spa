const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const basketRoute = require('./basketRouter');
const manufacturerRoute = require('./manufacturerRouter');
const productCategoryRouter = require('./productCategoryRouter');
const productRoute = require('./productRouter');

router.use('/user', userRouter);
router.use('/category', productCategoryRouter);
router.use('/manufacturer', manufacturerRoute);
router.use('/basket', basketRoute);
router.use('/product', productRoute);

module.exports = router;