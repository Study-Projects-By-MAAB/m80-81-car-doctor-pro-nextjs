import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("userCollection");
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) return Response.json({ message: "User already exists", status: 304 });
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        await userCollection.insertOne({ ...newUser, password: hashedPassword });
        return Response.json({ message: "user created successfully", status: 200 });
    } catch (error) {
        return Response.json({ message: "Something went wrong!", status: 500, error });
    }
};
