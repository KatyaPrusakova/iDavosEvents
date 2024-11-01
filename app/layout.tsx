import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
// import { QProvider } from '@quorini' auth
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'iDavos',
  description: 'A platform for event management',
  icons: {
    icon: '../public/assets/images/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <QProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    // </QProvider>

  )
}
