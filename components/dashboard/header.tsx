import type React from "react"
// Header component for dashboard pages
export function DashboardHeader({
  heading,
  description,
  children,
}: {
  heading: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
