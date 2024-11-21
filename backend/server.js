import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();
app.use(express.json()); //allows us to accepet JSON data in req.body

app.post ("/products", async (req,res) =>{
    const product = req.body;

    if(!product || !product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please provide all feids"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.error("Error in creating product : ", error.message);
        res.status(500).json({ success: false, message: "Server error"})
    }

})

app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });

    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" });
    }
})


app.listen(5000, () =>{
    connectDB();
    console.log("server started at http://localhost:5000");
})