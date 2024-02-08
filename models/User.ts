export interface UserMetadata {
  fyersId: string;

  fyersAppId: string;

  fyersSecretId: string;

  botToken?: string;

  fyersPin: string;

  telegramBotToken?: string;

  telegramNotificationChannel?: string;

  lastRenewedData?: Date;

  tradeQty: number;

  accountBalance: number;

  accessToken?: string;

  refreshToken?: string;
}

export interface User {
  name: string;

  phone: string;

  password: string;

  metadata?: UserMetadata;

  email?: string;

  isAdmin: boolean;
}
