const { AirportServices } = require('../services/index');

const airportService = new AirportServices();

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
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Airport created successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to create airport.");
    }
};

exports.destroy = async (req, res) => {
    try {
        const { airportId } = req.params;
        const airport = await airportService.deleteAirport(airportId);
        if (city) {
            return res.status(201).json({
                data: airport,
                success: true,
                message: "Airport deleted successfully.",
                error: {}
            });
        } else {
            throw Error("Not able to delete airport.");
        }
    } catch (error) {
        return sendErrorResponse(res, "Unable to delete airport.");
    }
};

exports.update = async (req, res) => {
    try {
        const { params, body } = req;
        const city = await airportService.updateAirport(params.cityId, body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Airport updated successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to update airport.");
    }
};

exports.get = async (req, res) => {
    try {
        const { airportId } = req.params;
        const airport = await airportService.getAirport(airportId);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Airport fetched successfully.",
            error: {}
        });
    } catch (error) {
        return sendErrorResponse(res, "Unable to fetch airport.");
    }
};

exports.getAllAirport = async (req, res) => {
    try {
        console.log(":::::::::::::;");
        const airport = await airportService.getAllAirport(req.query);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "All Airport fetched successfully.",
            error: {}
        });
    } catch (err) {
        return sendErrorResponse(res, "Unable to get all airport.");
    }
};

exports.bulkCreate = async (req, res) => {
    try {
        const airport = await airportService.bulkCreate(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "All airport created successfully.",
            error: {}
        });

    } catch (error) {
        console.log(error);
        return sendErrorResponse(res, "Unable to create airport.");
    }
};
