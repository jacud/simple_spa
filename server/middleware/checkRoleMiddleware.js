const jwt = require("jsonwebtoken");

module.exports = function (role) {
    return function (req, resp, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return resp.status(401).json({message: "Пользователь не авторизован"});
            }
    
            const decoded = jwt.verify(token, process.env.JWT_SECTER_KEY);

            if (decoded.role !== role) {
                return resp.status(403).json({message: "нет доступа"});
            }

            req.user = decoded;
            next();
        } catch (e) {
            return resp.status(401).json({message: "Пользователь не авторизован"});
        }
    }
}

