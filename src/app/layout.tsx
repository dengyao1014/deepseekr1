import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeepSeek R1 API - deepseekr1.site',
  description: 'Access DeepSeek R1 AI model through our free API platform at deepseekr1.site. Perfect for developers and researchers.',
  keywords: 'DeepSeek R1, AI API, Free AI API, Machine Learning, Natural Language Processing, deepseekr1.site',
  metadataBase: new URL('https://deepseekr1.site'),
  openGraph: {
    title: 'DeepSeek R1 API - Free AI Platform',
    description: 'Access DeepSeek R1 AI model through our free API platform. Perfect for developers and researchers.',
    url: 'https://deepseekr1.site',
    siteName: 'DeepSeek R1 API',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepSeek R1 API - Free AI Platform',
    description: 'Access DeepSeek R1 AI model through our free API platform. Perfect for developers and researchers.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}