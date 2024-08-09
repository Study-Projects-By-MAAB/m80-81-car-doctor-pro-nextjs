import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = await db.collection("services");
    try {
        await servicesCollection.deleteMany();
        await servicesCollection.insertMany(services);
        return NextResponse.json({ message: "seeded successfully." });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "No data found!", error });
    }
};
