export interface UserMetadata {
  fyersId: string;

  fyersAppId: string;

  fyersSecretId: string;

  botToken?: string;

  telegramBotToken?: string;

  telegramNotificationChannel?: string;

  lastRenewedData?: Date;

  tradeQty: number;

  accountBalance: number;

  accessToken?: string;

  refreshToken?: string;
}

export interface User {
  _id: string;

  name: string;

  phone: string;

  password: string;

  metadata?: UserMetadata;

  email?: string;

  isAdmin: boolean;
}
