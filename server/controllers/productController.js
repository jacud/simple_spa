const { Product, ProductInfo } = require("../models/models");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const ApiError = require("../handlers/error/ApiError");

class ProductController {
    async getAll (req, resp) {
        const { categoryId, manufacturerId } = req.query;
        let { limit, page } = req.query;
        let products = [];

        limit = limit || 9;
        page = page || 1;

        let offset = limit * (page - 1);

        if (!categoryId && !manufacturerId) {
            products = await Product.findAndCountAll({ limit, offset });
        }

        if (categoryId && !manufacturerId) {
            products = await Product.findAndCountAll({
                where: {
                    productCategoryId: categoryId
                },
                limit,
                offset
            });
        }

        if (!categoryId && manufacturerId) {
            products = await Product.findAndCountAll({
                where: {
                    manufacturerId
                },
                limit,
                offset
            });
        }
        
        resp.status(200).json(products);
    }

    async getById (req, resp) {
        const { id } = req.params
        const product = await Product.findByPk(id, {
            include: [{model: ProductInfo, as: 'info'}]
        });
        resp.status(200).json( product )
    }

    async create (req, resp, next) {
        try {
            const { name, price, productCategoryId, manufacturerId } = req.body;
            let { info } = req.body;

            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            
            const product = await Product.create({ name, price, productCategoryId, manufacturerId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(element => {
                    ProductInfo.create({
                        title: element.title,
                        description: element.description,
                        productId: product.id                       
                    });
                });
            }

            resp.status(200).json( product );
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ProductController();