// import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { Inter as FontSans } from "next/font/google"
// import { PageLayout } from "@/components/page-layout";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata = siteMetadata;


const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      {/* <PreloadResources /> */}
      <body >
        <UserProvider>
          <div>{children}</div>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;