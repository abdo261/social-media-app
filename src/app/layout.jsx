import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import RiteSide from "@/components/RiteSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { template: "s% | NEXT MEDIA", default: "NEXT MEDIA",absolute: false, },
  description: "this is description for social media application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  min-h-screen h-auto bg-gray-200 text-[#111113] dark:bg-[#111113] dark:text-gray-100`}
      > 
        <NextUIProvider>
          <Header />
          <main className="pb-[90px] px-3 pt-5 sm:pl-[115px] sm:pr-[315px] lg:pl-[340px] transition-all ease-in-out duration-500 ">
            {children} 
          </main>
          <RiteSide/>
          <NavBar />
        </NextUIProvider>
      </body>
    </html>
  );
}
