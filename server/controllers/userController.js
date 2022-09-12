const ApiError = require("../handlers/error/ApiError");

class UserController {
    async registartion (req, resp) {
        resp.status(200).json({ message: 'Registration is fine' });
    }

    async login (req, resp) {
        resp.status(200).json({ message: 'Login is fine' });
    }

    async check (req, resp, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest("Не указан идентификатор пользователя"));
        }
        resp.status(200).json({ message: `Auth is fine for user  ${id}` });
    }
}

module.exports = new UserController();  