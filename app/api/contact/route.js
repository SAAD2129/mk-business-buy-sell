import Contact from "@/models/Contact";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect()
        const query = await Contact.create(body)
        if (query) {
            return NextResponse.json(
                { message: "account under approval!" },
                { status: 200 }
            )
        }
        else {
            return NextResponse.json({ message: "some error occurred!" }, {
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
export async function GET(req, res) {
    try {

        await dbConnect()
        const queries = await Contact.find()
        if (queries) {
            return NextResponse.json(
                { message: "queries found!", queries },
                { status: 200 }
            )
        }
        else {
            return NextResponse.json({ message: "some error occurred!" }, {
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