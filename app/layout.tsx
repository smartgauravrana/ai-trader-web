// import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { Inter as FontSans } from "next/font/google"
// import { PageLayout } from "@/components/page-layout";
import './globals.css'

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { cn } from "@/lib/utils"
import PageHeader from "@/components/page-header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


// export const metadata = siteMetadata;


const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      {/* <PreloadResources /> */}
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} >
        <UserProvider>
          <PageHeader />
          <div>{children}</div>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;