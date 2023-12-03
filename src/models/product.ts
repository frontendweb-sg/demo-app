import mongoose, { Schema, Document } from "mongoose";
import { BRAND_TABLE_NAME } from "./brand";
import { CATEGORY_TABLE_NAME } from "./category";
import { idleFor } from "../utils/enums";

export const PRODUCT_TABLE_NAME = "product";
export interface IProduct {
  category: string;
  brand: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  idleFor: idleFor;
  color: string[];
  size: string[];
  cost_price: number;
  selling_price: number;
  offer_price: number;
  discount: number;
  stock: number;
  active: boolean;
  status: string;
  attributes: Attributes[];
}
export interface IProductDoc extends IProduct, Document<IProduct> {}

export interface Attributes {
  name: string;
  value: string;
}

const schema = new Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CATEGORY_TABLE_NAME,
      default: null,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: BRAND_TABLE_NAME,
      default: null,
    },
    title: { type: String, require: true },
    slug: { type: String, require: true },
    description: { type: String },
    excerpt: { type: String },
    idleFor: { type: String, default: idleFor.unkown, enum: idleFor },
    color: { type: [String] },
    size: { type: [String] },
    stock: { type: Number, default: 0 },
    cost_price: { type: Number, default: 0 },
    selling_price: { type: Number, default: 0 },
    offer_price: { type: Number, default: 0 },
    discounts: { type: Number, default: 0 },
    images: { type: [String] },
    attributes: [
      {
        name: { type: String },
        value: { type: String },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        doc.id = ret._id;
        delete ret.__v;
        delete doc.__v;
      },
    },
  }
);

export const Product = mongoose.model<IProductDoc>(PRODUCT_TABLE_NAME, schema);
