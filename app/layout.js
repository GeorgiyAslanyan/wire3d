import './globals.css'

export const metadata = {
  title: 'Wire 3d',
  description: 'Wire 3d model',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
