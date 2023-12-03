import mongoose, { Document, Schema } from "mongoose";
import { IUserDoc } from "./user";

export const CATEGORY_TABLE_NAME = "category";
export interface ICategory {
  title: string;
  slug: string;
  description: string;
  order: number;
  icon: string;
  active?: boolean;
}

export interface ICategoryDoc extends ICategory, Document<ICategory> {}

const schema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    slug: { type: String, require: true, trim: true },
    icon: { type: String, default: "" },
    description: { type: String, default: "" },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
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

export const Category = mongoose.model<IUserDoc>(CATEGORY_TABLE_NAME, schema);
