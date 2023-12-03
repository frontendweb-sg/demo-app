import mongoose, { Document, Schema } from "mongoose";
import { EStatus } from "../utils/enums";

const PAGE_TABLE_NAME = "page";

export interface ISection {
  title: string;
  slug: string;
  description: string;
  image: string;
  order: number;
  active: boolean;
  status: EStatus;
}

export interface IPage {
  title: string;
  slug: string;
  heroImage: string;
  description: string;
  excerpt: string;
  order: number;
  active: boolean;
  status: string;
  sections: ISection[];
}

export interface IPageDoc extends IPage, Document<IPage> {}

const schema = new Schema(
  {
    title: { type: String, require: true },
    slug: { type: String, require: true },
    description: { type: String, default: "" },
    excerpt: { type: String, default: "" },
    heroImage: { type: String, default: "" },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    status: {
      type: String,
      default: EStatus.pending,
      enum: [EStatus.pending, EStatus.publish],
    },
    sections: [
      {
        title: { type: String },
        slug: { type: String },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
        order: { type: Number, default: 0 },
        active: { type: Boolean, default: true },
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

export const Page = mongoose.model<IPageDoc>(PAGE_TABLE_NAME, schema);
