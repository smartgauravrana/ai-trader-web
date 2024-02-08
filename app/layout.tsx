// import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { Inter as FontSans } from "next/font/google";
// import { PageLayout } from "@/components/page-layout";
import "./globals.css";
import { ToastContainer } from "react-toastify";

import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata = siteMetadata;

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      {/* <PreloadResources /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <PageHeader />
        <ToastContainer />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
