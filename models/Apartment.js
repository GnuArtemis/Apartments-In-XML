//Database model for the property information, saved as strings.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
    property_id: String,
    name: String,
    email: String,
    unitCount: String,
    unitInfo: Schema.Types.Mixed
},{timestamps: true})
const Apartment = mongoose.model("Apartment",ApartmentSchema);
module.exports = Apartment;