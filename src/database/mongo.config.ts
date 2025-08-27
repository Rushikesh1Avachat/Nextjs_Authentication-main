import mongoose from "mongoose"

export async function connect() {
  if (mongoose.connection.readyState >= 1) return

  if (!process.env.MONGO_URL) {
    throw new Error("MONGODB_URI is not defined in .env.local")
  }

  await mongoose.connect(process.env.MONGO_URL)
}
