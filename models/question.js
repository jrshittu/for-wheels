import mongoose, { Schema, model, models } from "mongoose";

const QuestionSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    question: {
        type: String,
        required: [true, "Response is required"]
    }
}
);

const Question = models.Question || model("Question", QuestionSchema);

export default Question;


