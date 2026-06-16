import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Exo_2 } from "next/font/google";
<<<<<<< HEAD
import {IBM_Plex_Sans} from "next/font/google";
=======
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URl || "https://primethic.com"),
  title: "Alignment Intelligence Systems | PRIMETHIC",
  description: "Alignment intelligence systems ensure decisions, execution, and outcomes stay consistent under real-world conditions.",

 icons: {
    icon: "/favicon.jpeg",
  },};
<<<<<<< HEAD

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable:"--font-exo2",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ibm",
  display: "swap",
});




=======
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
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
      <body
<<<<<<< HEAD
        className={`${exo2.variable} ${ibmPlexSans.variable} relative bg-white! `}
=======
        className={`${exo2.className} relative bg-white! `}
>>>>>>> a058e2410b6512ea713e52c1b3c0f84543a4dcc5
      >
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
