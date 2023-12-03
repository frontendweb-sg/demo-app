import { Roles } from "../utils/enums";
import { Password } from "../utils/password";
import mongoose, { Schema, Document } from "mongoose";

export const USER_TABLE = "user";
export interface IUser {
  name: string;
  email: string;
  password?: string;
  image: string;
  mobile: string;
  role: Roles;
  verify: string;
  resetToken: string;
  provider_id?: string;
  active: boolean;
  accessToken?: string;
}

export interface IUserDoc extends Document<IUser>, IUser {}
const schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, trim: true },
    mobile: { type: String, trim: true },
    image: { type: String, default: "" },
    role: {
      type: String,
      default: [Roles.user],
      enum: [Roles.admin, Roles.superadmin, Roles.user],
    },
    verify: { type: Boolean, default: false },
    resetToken: { type: String, default: null },
    active: { type: Boolean, default: true },
    accessToken: { type: String, default: "" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        doc.id = ret._id;
        delete ret.__v;
        delete doc.__v;
        delete ret.password;
      },
    },
  }
);

schema.pre("save", function cb(done) {
  if (this.isModified("password")) {
    let pwd = Password.hash(this.get("password")!);
    this.set("password", pwd);
  }
  this.set("verify", ["admin", "superadmin"].includes(this.get("role")));
  done();
});

export const User = mongoose.model<IUserDoc>(USER_TABLE, schema);
