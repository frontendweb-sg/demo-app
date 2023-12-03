import cors from "cors";
import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV}` });
import path from "path";
import express from "express";
import { authRoute } from "./routes/auth";
import { connectDb } from "./config/db";
import { errorHandler } from "./middleware/error-handler";
import { categoryRoute } from "./routes/category";

// app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "..", "public")));

// routes
app.use("/api/auth", authRoute).use("/api/category", categoryRoute);
app.use(errorHandler);

// listen
app.listen(PORT, async () => {
  console.log("Server is running on port..." + PORT);
  await connectDb();
});
