// business.js
import mongoose from 'mongoose';
// Define the Business schema
const BusinessSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    askingPrice: { type: Number, required: true },
    revenue: { type: Number, required: true },
    sde: { type: Number, required: true },
    businessID: { type: String, required: true },
    location: { type: String, required: true },
    yearEstablished: { type: Number, required: true },
    businessCategory: { type: String, required: true },
    financing: { type: String, required: true },
    status: { type: String, required: true },
    ffe: { type: String },
    inventory: { type: String },
    ebitda: { type: Number },
    downPayment: { type: String },
    occupancyCost: { type: String },
    description: {
        type: String,
        required: true
    },
    isApproved: { type: Boolean, default: false },
});

// Create the Business model


const Business = mongoose?.models?.Business || mongoose.model('Business', BusinessSchema)
export default Business;