const ApiError = require("../handlers/error/ApiError");
const { ProductCategory } = require("../models/models");

class ProductCategoryController {
    async getAll (req, resp) {
        const categories = await ProductCategory.findAll();
        resp.status(200).json({ categories });
    }

    async create (req, resp) {
        const { name } = req.body;
        const newCategory = await ProductCategory.create({name});
        return resp.json(newCategory);
    }
}

module.exports = new ProductCategoryController();