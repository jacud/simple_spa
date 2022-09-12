const ApiError = require("../handlers/error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
    const token = jwt.sign(
        { id, email, role },
        process.env.JWT_SECTER_KEY,
        {
            expiresIn: "24h"
        }
    );

    return token;
}

class UserController {
    async registartion (req, resp, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Не заданы поля"));
        }

        const candidate = await User.findOne({
            where: {
                email
            }
        })
        //return resp.status(200).json(parseFloat(process.env.JWT_SOLT_ROUNDS));
        if (candidate) {
            return next(ApiError.badRequest("пользователь с таким Email уже существует"));
        }

        const pasHash = await bcrypt.hash(password, parseFloat(process.env.JWT_SOLT_ROUNDS));
        const user = await User.create({ email, password: pasHash, role });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);

        return resp.status(200).json({ token });
    }

    async login (req, resp, next) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            next(ApiError.badRequest("Доступ запрещен"));
        }

        let comparePass = bcrypt.compareSync(password, user.password);

        if(!comparePass) {
            next(ApiError.badRequest("Доступ запрещен"));
        }

        const token = generateJwt(user.id, user.email, user.role);

        resp.status(200).json({ token });
    }

    async check (req, resp, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        resp.status(200).json({ token });
    }
}

module.exports = new UserController();  