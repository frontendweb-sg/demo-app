import express from "express";
import {
  addBrand,
  deleteBrand,
  getBrands,
  updateBrand,
} from "../controllers/brand";
import { body } from "express-validator";
import { requestValidator } from "../middleware/request-validator";
import { auth } from "../middleware/auth";

// declare route
const route = express.Router();
route.get("/", auth, getBrands);
route.post(
  "/",
  [body("title", "title is required!").notEmpty()],
  requestValidator,
  auth,

  addBrand
);
route.put(
  "/:brandId",
  [body("title", "title is required!").notEmpty()],
  requestValidator,
  auth,

  updateBrand
);
route.delete("/:brandId", auth, deleteBrand);

// export
export { route as brandRoute };
