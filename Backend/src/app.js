import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import uploadRouter from "./routes/upload";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Conect to MongoDB
connectDB(process.env.MONGODB_URL)

// middleware
app.use("/api/categories", categoryRouter)
app.use("/api/products", productRouter)
app.use("/api/images", uploadRouter);

export const viteNodeApp = app;
