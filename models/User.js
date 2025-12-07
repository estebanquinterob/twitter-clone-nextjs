import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String, // se le puede poner unique: true si quiero que no se repita??
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
