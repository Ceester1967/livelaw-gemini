"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Sample data for recent activity
const activities = [
  {
    id: 1,
    type: "chat",
    title: "AI Chat Session",
    description: "Asked about contract termination clauses",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "document",
    title: "Document Upload",
    description: "Uploaded 'Service Agreement.pdf'",
    timestamp: "Yesterday",
  },
  {
    id: 3,
    type: "attorney",
    title: "Attorney Consultation",
    description: "30-minute call with Sarah Johnson",
    timestamp: "2 days ago",
  },
  {
    id: 4,
    type: "document",
    title: "Document Analysis",
    description: "AI analyzed 'Employment Contract.pdf'",
    timestamp: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {activity.type === "chat" ? "AI" : activity.type === "document" ? "DC" : "AT"}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
