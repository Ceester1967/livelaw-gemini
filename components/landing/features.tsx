import type React from "react"
import { Shield, FileText, MessageSquare, Users, Database, Clock, Lightbulb, Briefcase } from "lucide-react"

// Feature item component
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 rounded-full bg-primary/10 p-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export function LandingFeatures() {
  // Features data
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "AI Legal Chat",
      description: "Get instant answers to your legal questions with our advanced AI assistant.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Document Analysis",
      description: "Upload contracts and legal documents for AI-powered review and explanation.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Attorney Escalation",
      description: "Seamlessly escalate complex issues to experienced attorneys with one click.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Part-time General Counsel",
      description: "Access legal expertise without the cost of a full-time in-house lawyer.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Document Repository",
      description: "Securely store all your legal documents with smart search capabilities.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Availability",
      description: "Access legal assistance anytime, with AI always available and attorneys during business hours.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Legal Insights",
      description: "Gain valuable analytics and insights about your legal matters and risks.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Custom Legal Agents",
      description: "Create specialized AI agents for different legal domains relevant to your business.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Legal Tools for Your Business
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Our platform combines AI technology with legal expertise to provide comprehensive support for your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
