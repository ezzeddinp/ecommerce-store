import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <div className='bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-zinc-900 transition duration-500 '>
            <ModalProvider />
            <ToastProvider />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
