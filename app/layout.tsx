import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Providers } from '@/components/providers'
import { Metadata } from 'next'
import { FloatingCTA } from '@/components/floating-cta'
import { SiteSearch } from '@/components/site-search'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Nature Exquisite Nusantara - Premium Indonesian Vanilla Exporter',
    template: '%s | Nature Exquisite Nusantara'
  },
  description: 'Premium Indonesian vanilla products, sourced sustainably and delivered with excellence. Global supplier of high-quality vanilla beans and extracts.',
  keywords: ['vanilla', 'Indonesian vanilla', 'sustainable farming', 'premium spices', 'vanilla exporter'],
  authors: [{ name: 'Nature Exquisite Nusantara' }],
  creator: 'Nature Exquisite Nusantara',
  publisher: 'Nature Exquisite Nusantara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.natureexquisite.com',
    siteName: 'Nature Exquisite Nusantara',
    images: [
      {
        url: 'https://www.natureexquisite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nature Exquisite Nusantara - Premium Indonesian Vanilla'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@natureexquisite',
    creator: '@natureexquisite'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.natureexquisite.com" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <SiteSearch />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <FloatingCTA />
          </div>
        </Providers>
      </body>
    </html>
  )
}

