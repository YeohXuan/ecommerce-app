import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("\x1b[32mMongoDB connected successfully\x1b[0m");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce-app`);
};

export default connectDB;
