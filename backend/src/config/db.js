import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_MONGODB);
    console.log("Kết nối database thành công");
  } catch (error) {
    console.error("Lỗi khi nối database", error);
    process.exit(1); // Thoát kết nối db khi thất bại
  }
};
