import { connectToDB } from "@utils/database";

export  const POST = async (req) => {
    const { userId, question } = await req.json();

    try{
        await connectToDB();
    } catch (error){
        console.log("error")
    }
}