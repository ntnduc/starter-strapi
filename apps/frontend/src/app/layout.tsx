import type { Metadata, Viewport } from 'next'

import { FALLBACK_SEO } from '@/app.config'
import { inter } from '@/app/fonts'
import { Providers } from '@/lib/providers/providers'
import '@/styles/globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  ...FALLBACK_SEO,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#333333" />
      </head>
      <body
        className={clsx(
          inter.className,
          'flex min-h-screen flex-col bg-background text-foreground',
        )}
      >
        <Providers>{children}</Providers>
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
