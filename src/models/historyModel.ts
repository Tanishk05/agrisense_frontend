import mongoose, { mongo } from "mongoose";

const historySchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  disease: {
    type: String,
    required: [true, "Disease is required"],
  },
  prevent: {
    type: String,
    required: [true, "Prevention is required"],
  },
  supplement: {
    type: String,
    required: [true, "Supplement is required"],
  },
  supplementImage: {
    type: String,
    required: [true, "Supplement Image is required"],
  },
  supplementLink: {
    type: String,
    required: [true, "Supplement Link is required"],
  },
  url: {
    type: String,
    required: [true, "URL is required"],
  },
});

const History =
  mongoose.models.history || mongoose.model("history", historySchema);
export default History;
