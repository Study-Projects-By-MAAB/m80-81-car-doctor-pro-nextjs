import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ message: "Deleted the booking.", response: resp });
    } catch (error) {
        NextResponse.json({ message: "Something went wrong!" });
    }
};

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const { date, phone, address } = await request.json();
    try {
        const resp = await bookingsCollection.updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { date, phone, address } },
            { upsert: true },
        );
        return NextResponse.json({ message: "Updated the booking.", response: resp });
    } catch (error) {
        NextResponse.json({ message: "Something went wrong!" });
    }
};

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    try {
        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ message: "booking found.", data: resp });
    } catch (error) {
        NextResponse.json({ message: "Something went wrong!" });
    }
};
