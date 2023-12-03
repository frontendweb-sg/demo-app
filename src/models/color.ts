import mongoose, { Schema, Document, Model } from "mongoose";

export const COLOR_TABLE_NAME = "color";
export interface IColor {
  name: string[];
  slug: string;
  hashcode: string;
  active: boolean;
  order: number;
}

export interface IColorDoc extends IColor, Document<IColor> {}

const schema = new Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, require: true },
    hashcode: { type: String, require: true, length: { min: 7, max: 7 } },
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

export const Color = mongoose.model<IColorDoc>(COLOR_TABLE_NAME, schema);
