const Router = require('express');
const router = new Router();

router.get('/', (req, resp) => {
    resp.status(200).json({ message: 'Hello everyone' });
});

router.post('/registration', (req, resp) => {
    resp.status(200).json({ message: 'Registration is fine' });
});

router.post('/login', (req, resp) => {
    resp.status(200).json({ message: 'Login is fine' });
});

router.get('/auth', (req, resp) => {
    resp.status(200).json({ message: 'Auth is fine' });
});

module.exports = router;