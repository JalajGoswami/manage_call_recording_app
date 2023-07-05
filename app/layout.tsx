import '../public/antd.min.css'
import './globals.css'
import { Montserrat, Inter, Open_Sans, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manage Call Recordings',
  description: 'Assignment Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
