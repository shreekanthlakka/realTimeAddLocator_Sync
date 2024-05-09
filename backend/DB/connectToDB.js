import mongoose from "mongoose";
const connectToDb = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then((res) => console.log("connected to db"))
        .catch((err) => console.log("failed to connect to db", err));
};

export { connectToDb };
