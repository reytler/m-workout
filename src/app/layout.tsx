import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M-workout',
  description: 'Bodybuilding training manager',
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
