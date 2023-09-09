import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    about: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    isApproved: {
        type: Boolean,
        default: false
    },
})

const User = mongoose?.models?.User || mongoose.model('User', UserSchema)
export default User;