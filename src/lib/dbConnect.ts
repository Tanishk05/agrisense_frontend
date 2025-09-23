import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected successfully");
    
  } catch (error) {
    console.log("Db connection failed", error);
    
    process.exit(1)
  }
};

export default dbConnect;
