import type { Metadata } from "next";
import { Plus_Jakarta_Sans,  } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--plus-jakarta-sans",
  subsets: ["latin"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Lucsas | Web Development",
  description: "Web development",
  authors: [{ name: "Lucas Lira" }],
  creator: "Lucas Lira",
  keywords: [
    "ReactJS",
    "NextJS",
    "Web Development",
    "PPC Manager",
    "Google Ads",
    "Meta Ads",
    "Sells",
    "Digital Marketing",
    "leads",
    "ROI",
    "sell",
    "engagement",
  ],
  applicationName: "Lucsas Website",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
