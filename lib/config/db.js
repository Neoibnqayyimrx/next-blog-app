import mongoose from "mongoose";


const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://abuhanifa:abuhanifa@cluster0.7wi9s.mongodb.net/blog-app")
    console.log("DB Connected");
}

export default ConnectDB