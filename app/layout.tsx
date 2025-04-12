import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"

// Load the Inter font with Latin subset for better performance
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the application
export const metadata: Metadata = {
  title: "LiveLaw - AI Legal Assistant for SMBs",
  description: "AI-powered legal assistant for small and medium businesses with attorney escalation",
    generator: 'v0.dev'
}

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}


import './globals.css'