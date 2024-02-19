export interface UserMetadata {
  fyersId: string;

  fyersAppId: string;

  fyersSecretId: string;

  botToken?: string;

  pin: string;

  telegramBotToken?: string;

  telegramNotificationChannel?: string;

  lastRenewedData?: Date;

  tradeQty: number;

  accountBalance: number;

  accessToken?: string;

  refreshToken?: string;

  pauseTrades?: boolean;
}

export interface User {
  _id: string;

  name: string;

  phone: string;

  password: string;

  metadata?: UserMetadata;

  email?: string;

  isAdmin: boolean;

  isTokenExpired?: string;
}
