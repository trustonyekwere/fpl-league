import type { Metadata } from "next";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

// font
const gopher = localFont({
  src: "./fonts/Gopher-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clnsdzy's League",
  description:
    "Track your Fantasy Premier League mini league standings, results, and fixtures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={gopher.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
    </html>
  );
}
