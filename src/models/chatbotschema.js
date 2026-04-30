import mongoose from "mongoose";

const chatbotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // ✅ should be `required`, not `require`
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    queryString: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"],
      default: "pending",
    },
  },
  {
    timestamps: true, // ✅ should be passed as a second argument to Schema
  }
);

export default mongoose.models.Chatbotschema ||
  mongoose.model("Chatbotschema", chatbotSchema);
