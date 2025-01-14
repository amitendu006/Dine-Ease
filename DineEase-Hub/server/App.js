import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({path: "./config/config.env" });

const corsOptions = {
    origin: 'https://dine-ease-hub.vercel.app/', // Your frontend origin
    credentials: true, // Allow credentials
  };
  
app.use(cors(corsOptions));
  


app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbconnection();


app.use(errorMiddleware)
export default app;
