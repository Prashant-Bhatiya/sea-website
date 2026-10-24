import './globals.css';
import { AppProvider } from '@/context/AppContext';

export const metadata = {
  title: 'Shubh Engineering Academy | Inspire . Learn . Achieve | Gujarat Civil Engineering',
  description: 'Shubh Engineering Academy (SEA) - Inspire . Learn . Achieve. Premier civil engineering academy for GPSC Class 1 & 2, GSSSB AAE, and GPSSB in Gujarat. Gandhinagar sole center.',
  icons: {
    icon: '/sea-logo-badge.jpg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Plus Jakarta Sans & Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F6F0DF] text-[#1E1C12] font-sans antialiased selection:bg-[#D4AB3F] selection:text-[#2B3A55]">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

