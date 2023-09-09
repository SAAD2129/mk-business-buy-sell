import Business from "@/models/Business";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect()
        console.log(body)
        await Business.create(body);
        return NextResponse.json({ message: "business created wait for approval!" }, {
            status: 201
        })
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
export async function GET(req, res) {
    try {

        await dbConnect()
        const businesses = await Business.find()
        return NextResponse.json({ message: "businesses found!", businesses }, {
            status: 200
        })
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
export async function PUT(req, res) {
    try {

        await dbConnect()
        const body = await req.json();

        const business = await Business.findById(body.id)
        if (!business) {
            return NextResponse.json({ message: "business not found!" }, {
                status: 404
            })
        } else {
            business.isApproved = true
            await business.save()
            const businesses = await Business.find()
            return NextResponse.json({ message: "request approved!", businesses }, {
                status: 200
            })
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

        await dbConnect()
        const body = await req.json();
        const business = await Business.findByIdAndDelete(body.id)
        if (!business) {
            return NextResponse.json({ message: "business not found!" }, {
                status: 404
            })
        } else {
            const businesses = await Business.find()
            return NextResponse.json({ message: "request deleted!", businesses }, {
                status: 200
            })
        }
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}