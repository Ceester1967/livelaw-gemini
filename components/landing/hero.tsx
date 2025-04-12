import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gavel, Scale } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_40%,rgba(59,130,246,0.12),transparent)]" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Main heading with highlighted text */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Your AI-Powered <span className="text-primary">Legal Assistant</span> for Small Business
          </h1>

          {/* Subheading that explains the value proposition */}
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Get instant legal answers, document analysis, and expert advice with the option to escalate to real
            attorneys when needed.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href="/sign-up">
              <Button size="lg" className="gap-1.5">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-sm text-muted-foreground">Trusted by 500+ small businesses</div>

          {/* Hero image or illustration */}
          <div className="mt-12 rounded-lg border bg-card p-4 shadow-lg">
            <div className="flex items-center justify-center space-x-4 rounded-md bg-primary/10 p-8">
              <Scale className="h-16 w-16 text-primary" />
              <Gavel className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
