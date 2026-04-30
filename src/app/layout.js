import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Toaster } from "../components/ui/toaster";
import FloatingSocialButtons from "../components/Floater/floater";
import ContactSlider from "../components/contact/contact";
import Chatbot from "../components/chatbot/chatbot";
import Script from "next/script";
// import { GA_MEASUREMENT_ID } from "../lib/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spellmount",
  description:
    "Spellmount Resort in Kausani is the perfect blend of comfort and convenience. It provides excellent services- From Ac to non- AC rooms, free Wi-Fi, parking facilities and delicious cuisine. The major tourist attractions are within the walking distance of the hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}


          
        />
      </head> */}

      {/* Google Ads Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17900614229"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17900614229');
          `}
      </Script>
      <body className={inter.className}>
        <Providers attribute="class" defaultTheme="dark">
          <Header />
           {/* <Analytics/> */}
          {children}
          <Toaster />
          <Footer />
          <FloatingSocialButtons />
          <ContactSlider />
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
