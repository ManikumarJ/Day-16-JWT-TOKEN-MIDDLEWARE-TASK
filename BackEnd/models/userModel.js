import mongoose from "mongoose";

const middlewareSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const middleDataModel = mongoose.model("LoginDetails", middlewareSchema);

export default middleDataModel;

