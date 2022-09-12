const Router = require('express');
const router = new Router();

router.get('/', (req, resp) => {
    resp.status(200).json({ message: 'get everyone' });
});

router.post('/', (req, resp) => {
    resp.status(200).json({ message: 'post is fine' });
});

module.exports = router;