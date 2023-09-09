import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SocketProvider } from '../components/providers/socket-provider'
   

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SocketProvider>
      <ClerkProvider>

   
        

      
      <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider defaultTheme='light' attribute='class' forcedTheme='light' storageKey='clone'  enableSystem={false} >



       
        {children}
          </ThemeProvider>
         
        </body>
      </ClerkProvider>
          </SocketProvider>
    </html>
  )
}
