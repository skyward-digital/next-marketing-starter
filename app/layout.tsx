import { Footer } from '#/ui/components/Footer';
import { Header } from '#/ui/components/Header';
import '../styles/globals.css';
import type { Metadata } from 'next';
// import ThemeProvider from './ThemeProvider';
import localFont from 'next/font/local';
// import { Inter } from "next/font/google";

// If you want to add a Google font, you add it to the html className as inter.className
//const inter = Inter({ subsets: ["latin"] });

const onest = localFont({
  variable: '--font-brand',
  src: [
    {
      path: '../public/fonts/OnestThin1602-hint.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestLight1602-hint.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestRegular1602-hint.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestMedium1602-hint.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestBold1602-hint.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestExtraBold1602-hint.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/OnestBlack1602-hint.woff',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: 'Skyward Digital',
    template: '%s | Skyward Digital',
  },
  description: 'A website for Skyward Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerNavLinks = [
    { link: '/about', label: 'About' },
    { link: '/company', label: 'Company' },
    { link: '/blog', label: 'Blog' },
  ];

  return (
    // className should be applied to html rather than body
    <html lang="en" className={onest.variable}>
      <body className="flex min-h-screen flex-col bg-white">
        {/* ThemeProvider is only needed if you are planning to use dark mode */}
        {/* <ThemeProvider> */}
        <Header navigation={headerNavLinks} />
        <main>{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
