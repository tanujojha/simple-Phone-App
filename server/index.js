import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";


const app = express();
app.use(express.json())
app.use(cors())

const client = new MongoClient(process.env.MONGO_ATLAS_URL);
await client.connect();
console.log("Mongo is connected !!!");


app.get("/mobiles", async(req, res)=>{
    const result = await client.db("b42wd").collection("phones").find({}).toArray();
    res.send(result)
})

app.post("/mobiles", async (req, res)=>{
    const data = req.body;
    const result = await client.db("b42wd").collection("phones").insertMany(data)
    res.send(result)
})


app.listen("5000", ()=>{
    console.log("server started at 5000");
})