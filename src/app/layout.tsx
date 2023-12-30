import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />

        <title>Franco Riveros Vivar - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={inter.className + " overflow-x-hidden"}>
        <main
          className="flex min-h-screen flex-col items-center justify-between"
          style={{ background: `url('/bg.svg')`, backgroundSize: "contain" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
