import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Your sales dashboard powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="flex">
        {children}
      </body>
    </html>
  );
}
