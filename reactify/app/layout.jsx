import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://wetap.pro"),
  title: {
    default: "WeTap",
    template: "%s | WeTap",
  },
  description:
    "WeTap creates smart landing pages for restaurants and venues — all links in one place.",
  openGraph: {
    title: "WeTap",
    description: "Smart landing pages for restaurants and venues.",
    url: "https://wetap.pro",
    siteName: "WeTap",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          minHeight: "100vh",
          fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {children}
      </body>
    </html>
  );
}
