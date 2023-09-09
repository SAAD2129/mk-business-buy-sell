import User from "@/models/User";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect()
        console.log(body)
        await User.create(body);

        return NextResponse.json({
            message: "account request sent successfully!"

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