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
  title: "Chairat Nuansamniang",
  description:
    "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
  keywords:
    "Chairat Nuansamniang, Full Stack Developer, Software Engineer, React, Next.js, Node.js, JavaScript, Web Development",
  authors: [{ name: "Chairat Nuansamniang" }],
  creator: "Chairat Nuansamniang",
  openGraph: {
    title: "Chairat Nuansamniang - Full-Stack Developer",
    description:
      "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
    url: "https://my-personal-profile-blue.vercel.app/",
    siteName: "Chairat Nuansamniang Portfolio",
    images: [
      {
        url: "/profile-icon.jpg",
        width: 1200,
        height: 630,
        alt: "Chairat Nuansamniang - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chairat Nuansamniang - Full-Stack Developer",
    description:
      "Full-Stack Developer & Software Engineer - Creating innovative digital solutions with modern web technologies",
    images: ["/profile-icon.jpg"],
  },
  icons: {
    icon: "/profile-icon.jpg",
    shortcut: "/profile-icon.jpg",
    apple: "/profile-icon.jpg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Sayan Adhikary" />
        <link rel="canonical" href="https://sayan-adhikary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
