import Question from "@models/question";
import { connectToDB } from "@utils/database";

export  const POST = async (req) => {
    const { userId, question } = await req.json();

    try{
        await connectToDB();
        const newQuestion = new Question({
            creator: userId,
            question,
        })
        await newQuestion.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error){
        return new Response("Failed to get a response", { status: 500 })
    }
}