import User from "@/models/User";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json()
        await dbConnect()
        const user = await User.findById(body.id);
        if (user) {
            user.isApproved = true
            await user.save()
            const users = await User.find();
            return NextResponse.json({
                message: "request approved successfully!",
                users
            }, {
                status: 200
            })
        } else {

        }


    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
export async function DELETE(req, res) {
    try {
        const body = await req.json()
        await dbConnect()
        await User.findByIdAndDelete(body.id);
        const users = await User.find();
        return NextResponse.json({
            message: "request deleted successfully!",
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