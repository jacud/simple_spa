const ApiError = require("../handlers/error/ApiError");

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }

    const internalError = ApiError.internalError("Непредвиденная ошибка");
    return res.status(internalError.status).json({ message: internalError.message });
}