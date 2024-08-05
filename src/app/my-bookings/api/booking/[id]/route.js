import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    try {
        const resp = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "Deleted the booking.", response: resp });
    } catch (error) {
        Response.json({ message: "Something went wrong!" });
    }
};

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    try {
        const resp = await bookingsCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "booking found.", response: resp });
    } catch (error) {
        Response.json({ message: "Something went wrong!" });
    }
};
