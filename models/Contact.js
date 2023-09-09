import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
})

const Contact = mongoose?.models?.Contact || mongoose.model('Contact', ContactSchema)
export default Contact;