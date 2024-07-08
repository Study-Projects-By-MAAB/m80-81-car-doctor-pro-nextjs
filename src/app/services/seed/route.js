import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = await db.collection("services");
    try {
        await servicesCollection.deleteMany();
        await servicesCollection.insertMany(services);
        return Response.json({ message: "seeded successfully." });
    } catch (error) {
        console.log(error);
    }
};
