'use client'
import Header from '@/components/Header'
import './globals.css'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}