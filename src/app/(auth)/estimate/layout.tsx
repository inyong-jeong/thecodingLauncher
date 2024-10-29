// import { Footer } from '@/components/Footer'
// import { Header } from '@/components/Header'

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Header />
//       <div className="px-8">{children}</div>
//       <Footer />
//     </>
//   )
// }

import { Inter, Lexend } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import clsx from 'clsx'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <AntdRegistry>
          <Header />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  )
}
