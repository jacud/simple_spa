class BasketController {
    async get (req, resp) {
        resp.status(200).json({ message: 'Registration is fine' });
    }

    async create (req, resp) {
        resp.status(200).json({ message: 'Login is fine' });
    }
}

module.exports = new BasketController();