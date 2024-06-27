import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("userCollection");
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) return Response.json({ message: "User already exists", status: 304 });
        await userCollection.insertOne(newUser);
        return Response.json({ message: "user created successfully", status: 200 });
    } catch (error) {
        return Response.json({ message: "Something went wrong!", status: 500, error });
    }
};
