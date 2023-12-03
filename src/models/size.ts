import mongoose, { Schema, Document, Model } from "mongoose";

export const SIZE_TABLE_NAME = "size";
export interface ISize {
  slug: string;
  idleFor: string;
  sizes: string[];
  type: string;
  active: boolean;
  order: number;
}

export interface ISizeDoc extends ISize, Document<ISize> {}

const schema = new Schema(
  {
    idleFor: { type: String, require: true },
    slug: { type: String, require: true },
    type: { type: String, require: true },
    sizes: { type: [String], require },
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

export const Size = mongoose.model<ISizeDoc>(SIZE_TABLE_NAME, schema);
