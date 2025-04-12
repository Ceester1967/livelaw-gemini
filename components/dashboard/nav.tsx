"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, FileText, Home, MessageSquare, Settings, Upload, Users } from "lucide-react"

// Navigation items for the dashboard sidebar
const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Chat",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Upload",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "Legal Agents",
    href: "/dashboard/agents",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  // Get the current pathname to highlight the active link
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 px-2 py-4 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            // Base styles for all nav items
            "group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground",
            // Active styles for the current page
            pathname === item.href ? "bg-accent" : "transparent",
          )}
        >
          <item.icon className="h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
