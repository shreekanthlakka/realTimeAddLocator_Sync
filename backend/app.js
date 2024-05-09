import express from "express";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

import address from "./routes/address.routes.js";

app.use("/api/v1/address", address);

export default app;
