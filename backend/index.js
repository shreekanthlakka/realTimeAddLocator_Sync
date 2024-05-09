import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectToDb } from "./DB/connectToDB.js";

app.listen(process.env.PORT, () => {
    console.log(`server is up and running on port ${process.env.PORT}`);
    connectToDb();
});
