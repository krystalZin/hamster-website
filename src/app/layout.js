import './globals.css'

export const metadata = {
  title: 'Hamster Care',
  description: 'A website about proper hamster care!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
