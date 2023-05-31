import './globals.css'

export const metadata = {
  title: 'Wire 3d',
  description: 'Wire 3d model',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
