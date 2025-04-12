import type React from "react"
import { UserButton } from "@clerk/nextjs"
import { DashboardNav } from "@/components/dashboard/nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Scale } from "lucide-react"
import Link from "next/link"

// Layout for dashboard pages (protected by authentication)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Dashboard header with logo, user button, and theme toggle */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold">
            <Scale className="h-5 w-5" />
            <span>LiveLaw</span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            {/* Clerk's UserButton for account management */}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        {/* Dashboard navigation sidebar */}
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardNav />
        </aside>
        {/* Main content area */}
        <main className="flex w-full flex-col overflow-hidden py-6">{children}</main>
      </div>
    </div>
  )
}
