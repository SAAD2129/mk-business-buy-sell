import User from "@/models/User";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {

        await dbConnect()
        const users = await User.find()
        if (user) {
            if (!user.isApproved)
                return NextResponse.json(
                    { message: "account under approval!" },
                    { status: 200 }
                )
            if (user.password !== body.password) {
                return NextResponse.json(
                    { message: "incorrect password!" },
                    { status: 400 }
                )
            } else {
                return NextResponse.json(
                    { message: "login successfully!" },
                    { status: 200 }
                )
            }
        }
        else {
            return NextResponse.json({ message: "incorrect credentials!" }, {
                status: 400
            })
        }

    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}