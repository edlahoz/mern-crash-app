import mongoose from "mongoose";
export default async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI ?? "");
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
}
