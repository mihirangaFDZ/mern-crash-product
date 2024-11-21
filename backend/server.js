import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import dotenv from "dotenv"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000
app.use(express.json()); //allows us to accepet JSON data in req.body

app.use("/api/products", productRoutes)


app.listen(PORT, () =>{
    connectDB();
    console.log("server started at http://localhost:" + PORT);
})