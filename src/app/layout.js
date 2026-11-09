import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Providers from "@/components/Providers";
import ConditionalChrome from "@/components/ConditionalChrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Johnpaul Nwokocha — Automation Builder & Workflow Engineer",
  description: "Portfolio of n8n workflows, API integrations, and automation builds by Johnpaul Nwokocha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <Providers>
          <ConditionalChrome>{children}</ConditionalChrome>
        </Providers>
      </body>
    </html>
  );
}