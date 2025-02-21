import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ChatBot from "./components/ChatBot"
import type React from "react"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "QuickReach AI - Powering Brands with Websites, AI Chatbots & High-Performance Marketing",
  description: "Fast, scalable, and AI-driven solutions that transform your brand's digital presence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>{/* Add any necessary head elements here */}</head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen w-full overflow-x-hidden`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <main>
            <div className="w-full">{children}</div>
          </main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}

