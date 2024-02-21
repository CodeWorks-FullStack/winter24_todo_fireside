import { Schema } from "mongoose";

export const TodoSchema = new Schema(
  {
    description: { type: String, required: true, minLength: 3, maxLength: 50 },
    completed: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)