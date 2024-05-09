import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        addressQuery: { type: String },
        coordinates: {
            lat: { type: Number },
            lng: { type: Number },
        },
        // userId: {},
        mgrs: { type: String },
        addInfo: { type: Object },
        formatted: { type: String },
        mapUrl: { type: String },
    },
    { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
