import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const _playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const viewport: Viewport = {
  themeColor: '#002244',
}

export const metadata: Metadata = {
  title: 'CoFirstTimeBuyerGrants \u2014 Colorado Home Buying Assistance',
  description:
    'CoFirstTimeBuyerGrants connects Colorado first-time home buyers with grant programs that can provide thousands of dollars toward your purchase \u2014 money you never have to pay back.',
  generator: 'next',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}</Script>
      </body>
    </html>
  )
}
