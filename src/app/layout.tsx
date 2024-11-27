import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zakariae Lakhdar | Full Stack Developer Portfolio",
  description: "Showcasing my projects and expertise in Next.js, React, and Node.js. Discover my journey in web development and explore a collection of my professional work.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
