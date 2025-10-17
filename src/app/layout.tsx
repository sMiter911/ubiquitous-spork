import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipHustle - Side Hustling to the Next Level",
  description: "ShipHustle is a directory of people with skills and talents in your local area. Connect with local customers, share updates, and grow your side hustle.",
  keywords: "side hustle, local business, gig economy, skills directory, community",
  authors: [{ name: "ShipHustle Team" }],
  creator: "ShipHustle",
  publisher: "ShipHustle",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logos/icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/logos/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logos/icon.png" sizes="180x180" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
