import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Establish the connection using the URI from the environment variable
    await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
