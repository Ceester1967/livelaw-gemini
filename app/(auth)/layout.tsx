import type React from "react"
// Layout for authentication pages (sign-in, sign-up)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex min-h-screen flex-col items-center justify-center bg-muted/50 py-12">{children}</div>
}
