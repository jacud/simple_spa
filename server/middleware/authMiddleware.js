const jwt = require("jsonwebtoken");
module.exports = function (req, resp, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.autharization.split(' ')[1];
        if (!token) {
            return resp.status(401).json({message: "Пользователь не авторизован1"});
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECTER_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        return resp.status(401).json({message: "Пользователь не авторизован"});
    }
}