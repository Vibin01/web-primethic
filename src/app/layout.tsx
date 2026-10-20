import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URl || "https://primethic.com"),
  title: "Alignment Intelligence Systems | PRIMETHIC",
  description: "Alignment intelligence systems ensure decisions, execution, and outcomes stay consistent under real-world conditions.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5DBXV73F');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="relative bg-white!">
        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
        />
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DBXV73F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End GTM NoScript */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
