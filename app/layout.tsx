import '../public/antd.min.css'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
