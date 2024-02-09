import Footer from '@/components/Footer'
import Header from '@/components/Header'
import config from '@/lib/config'
import type {Metadata, Viewport} from 'next'
import './globals.css'


/**
 * Setup metadata.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.siteName} - ${config.siteDescription}`,
  description: config.siteDescription
}

/**
 * Setup viewport.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111113' // Dark grey
}

/**
 * Root layout component.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body>
      <div className="array-tab">
        <div className="array-tab-center" />
      </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
