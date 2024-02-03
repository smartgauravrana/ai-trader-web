import {
  prop,
  getModelForClass,
  modelOptions,
  post,
} from "@typegoose/typegoose";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";

// Enum for status
enum CustomerStatus {
  ACTIVE = "active",
  PAUSED = "paused",
  INACTIVE = "inactive",
}

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: "modifiedAt" },
    toObject: { virtuals: true },
  },
})
export class BaseEntity implements Base {
  _id!: Types.ObjectId;

  id!: string;

  @prop()
  public updatedAt!: Date;

  @prop()
  public createdAt!: Date;
}

@post<Customer>("save", function (doc) {
  if (doc) {
    doc.id = doc._id.toString();
    doc._id = doc.id;
  }
})
@post<Customer[]>(/^find/, function (docs) {
  // @ts-ignore
  if (this.op === "find") {
    docs.forEach((doc) => {
      doc.id = doc._id.toString();
      doc._id = doc.id as any;
    });
  }
})
@modelOptions({ schemaOptions: { timestamps: true } })
export class Customer extends BaseEntity {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  phone!: string;

  @prop({ required: true })
  email!: string;

  @prop({ required: true })
  fyersId!: string;

  @prop({ required: true })
  fyersAppId!: string;

  @prop({ required: true })
  fyersSecretId!: string;

  @prop()
  botToken?: string;

  @prop({ required: true })
  fyersPin!: string;

  @prop({ required: true })
  fyersRedirectUrl!: string;

  @prop()
  telegramBotToken?: string;

  @prop()
  telegramNotificationChannel?: string;

  @prop()
  lastRenewedData?: Date;

  @prop({ enum: CustomerStatus, default: CustomerStatus.ACTIVE })
  status!: CustomerStatus;
}

// Create the Customer model
export const CustomerModel = getModelForClass(Customer);
