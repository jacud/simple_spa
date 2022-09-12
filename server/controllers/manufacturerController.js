const { Manufacturer } = require("../models/models");

class ManufacturerController {
    async getAll (req, resp) {
        const manufacturers = await Manufacturer.findAll();
        resp.status(200).json({ manufacturers });
    }

    async create (req, resp) {
        const { name } = req.body;
        const newManufacturer = await Manufacturer.create({name});
        return resp.json(newManufacturer);
    }
}

module.exports = new ManufacturerController();