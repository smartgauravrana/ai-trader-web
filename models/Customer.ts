import {
  prop,
  getModelForClass,
  Ref,
  modelOptions,
} from "@typegoose/typegoose";

// Enum for status
enum CustomerStatus {
  ACTIVE = "active",
  PAUSED = "paused",
  INACTIVE = "inactive",
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Customer {
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
