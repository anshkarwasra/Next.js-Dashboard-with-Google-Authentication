import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../components/auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza Dashboard',
  description: 'Modern pizza order management dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}