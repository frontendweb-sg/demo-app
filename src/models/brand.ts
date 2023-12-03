import mongoose, { Document, Schema } from "mongoose";

export const BRAND_TABLE_NAME = "brand";
export interface IBrand {
  title: string;
  slug: string;
  order: number;
  active?: boolean;
}

export interface IBrandDoc extends IBrand, Document<IBrand> {}

const schema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    slug: { type: String, require: true, trim: true },
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

export const Brand = mongoose.model<IBrandDoc>(BRAND_TABLE_NAME, schema);
