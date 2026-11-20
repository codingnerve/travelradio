import mongoose, { type InferSchemaType, type Model, Schema } from "mongoose";
import { ENQUIRY_TYPES } from "@/lib/validation";

const enquirySchema = new Schema(
  {
    reference: { type: String, required: true, unique: true, index: true },
    /** Idempotency key: a double-click or retry returns the same enquiry. */
    clientToken: { type: String, required: true, unique: true },
    type: { type: String, enum: ENQUIRY_TYPES, required: true, index: true },
    /** Finer-grained label, e.g. the Manage Booking category. */
    category: { type: String },
    fullName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, lowercase: true, maxlength: 254 },
    phone: { type: String, required: true, maxlength: 30 },
    message: { type: String, default: "", maxlength: 2000 },
    details: { type: Schema.Types.Mixed, default: {} },
    sourcePage: { type: String, required: true, maxlength: 200 },
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ["new", "in-progress", "resolved", "spam"],
      default: "new",
      index: true,
    },
    emailStatus: {
      type: String,
      enum: ["pending", "sent", "failed", "skipped"],
      default: "pending",
    },
    /** SHA-256 of IP + secret salt; the raw IP address is never stored. */
    ipHash: { type: String },
    userAgent: { type: String, maxlength: 300 },
  },
  { timestamps: true },
);

enquirySchema.index({ createdAt: -1 });

export type EnquiryDoc = InferSchemaType<typeof enquirySchema>;

export const Enquiry: Model<EnquiryDoc> =
  (mongoose.models.Enquiry as Model<EnquiryDoc> | undefined) ??
  mongoose.model<EnquiryDoc>("Enquiry", enquirySchema);
