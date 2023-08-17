import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { UserProvider } from '@/publicodes-next'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Publicodes Next',
  description: `Hooks React permettant de gérer le state d'un utilisateur de Nos Gestes Climat et ses simulations associées.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
