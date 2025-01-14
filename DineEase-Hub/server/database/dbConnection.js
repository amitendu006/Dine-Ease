import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose
    .connect("mongodb+srv://akashgaur:pass1234@cluster0.dk0pg.mongodb.net/", {
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch((err) => {
        console.log(`Some error occured while connecting to database! ${err}`);
    });
}