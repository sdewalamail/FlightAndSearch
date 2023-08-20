const { CityServices } = require('../services/index');

const cityService = new CityServices();

// Helper function to handle error responses
const sendErrorResponse = (res, message) => {
    console.log(message);
    return res.status(500).json({
        data: {},
        success: false,
        message,
        error: {}
    });
};

exports.create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to create city.");
    }
};

exports.destroy = async (req, res) => {
    try {
        const { cityId } = req.params;
        const city = await cityService.deleteCity(cityId);
        if (city) {
            return res.status(201).json({
                data: city,
                success: true,
                message: "City deleted successfully.",
                error: {}
            });
        } else {
            throw Error("Not able to delete city.");
        }
    } catch (error) {
        return sendErrorResponse(res, "Unable to delete city.");
    }
};

exports.update = async (req, res) => {
    try {
        const { params, body } = req;
        const city = await cityService.updateCity(params.cityId, body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City updated successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to update city.");
    }
};

exports.get = async (req, res) => {
    try {
        const { cityId } = req.params;
        const city = await cityService.getCity(cityId);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City fetched successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to fetch city.");
    }
};

exports.getAllCity = async (req, res) => {
    try {
        console.log(":::::::::::::");
        const allCity = await cityService.getAllCity(req.query);
        return res.status(201).json({
            data: allCity,
            success: true,
            message: "All cities fetched successfully.",
            error: {}
        });
    } catch (err) {
        return sendErrorResponse(res, "Unable to get all cities.");
    }
};

exports.bulkCreate = async (req, res) => {
    try {
        const cities = await cityService.bulkCreate(req.body);
        return res.status(201).json({
            data: cities,
            success: true,
            message: "All cities created successfully.",
            error: {}
        });

    } catch (error) {
        console.log(error);
        return sendErrorResponse(res, "Unable to create cities.");
    }
};
