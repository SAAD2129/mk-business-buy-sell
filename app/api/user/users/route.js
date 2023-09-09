import User from "@/models/User";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {

        await dbConnect()
        const users = await User.find();
        console.log(users)
        return NextResponse.json({
            message: "users found successfully!",
            users
        }, {
            status: 200
        })

    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}