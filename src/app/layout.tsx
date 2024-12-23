import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import localFont from "next/font/local";
import Provider from "@/components/Providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Code Image",
  description: "Create your own code image with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased min-h-screen max-w-screen-2xl mx-auto`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Provider>
            <div className="w-full h-full px-4 sm:px-8 md:px-14 xl:px-20 2xl:px-28">
              <Header />
              <main className="min-h-[calc(100vh-135px)]">{children}</main>
            </div>
            <Footer />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
