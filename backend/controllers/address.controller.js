import { asyncHandler } from "../utils/asyncHandler.js";
import axios from "axios";
import { CustomError } from "../utils/customError.js";
import { validationResult } from "express-validator";
import Address from "../models/address.model.js";
import { CustomResponse } from "../utils/customResponse.js";

const forwardGeoCoadingHandler = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "validation errors", errors.array()));
    }
    const { location } = req.query;
    const response = await axios.get(
        `${process.env.GEO_URL}/json?q=${location}&key=${process.env.KEY}`
    );

    if (response?.status?.code !== 200 && response?.results?.length === 0) {
        throw new CustomError(400, "error while getting loaction");
    }
    const { geometry, formatted, components } = response.data.results[0];
    const { MGRS, OSM } = response.data.results[0].annotations;

    const add = await Address.create({
        addressQuery: location,
        coordinates: {
            lat: geometry.lat,
            lng: geometry.lng,
        },
        mgrs: MGRS,
        addInfo: components,
        mapUrl: OSM.url,
        formatted,
    });
    if (!add) {
        throw new CustomError(400, "failed to create add");
    }

    res.status(201).json(new CustomResponse(201, "address saved to db", add));
});

export { forwardGeoCoadingHandler };

/**
 * https://api.opencagedata.com/geocode/v1/json?q=Frauenplan+1%2C+99423+Weimar%2C+Germany&key=7492234d184e4b79a017c647c1541833
 *
 */
