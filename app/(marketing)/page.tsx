import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

// Marketing landing page
export default function MarketingPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Legal Assistance for Your Business
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Get instant legal advice, analyze documents, and connect with attorneys when needed. Your AI legal
                  assistant is available 24/7.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-up" passHref>
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/features" passHref>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for hero image */}
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                  [Hero Image]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Features That Make Legal Work Easier
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform combines AI technology with legal expertise to provide comprehensive solutions for your
                business.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI Legal Assistant</h3>
                <p className="text-muted-foreground">
                  Ask legal questions and get instant, accurate answers based on your specific situation.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Document Analysis</h3>
                <p className="text-muted-foreground">
                  Upload contracts and legal documents for AI analysis, risk assessment, and plain language
                  explanations.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Attorney Access</h3>
                <p className="text-muted-foreground">
                  Escalate complex issues to experienced attorneys who can provide personalized legal advice.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Legal Project Management</h3>
                <p className="text-muted-foreground">
                  Organize your legal matters into projects with full history and document repositories.
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Custom Legal Agents</h3>
                <p className="text-muted-foreground">
                  Create specialized AI agents for different legal domains tailored to your business needs.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Track usage, monitor legal risks, and gain insights into your company's legal landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/sign-up" passHref>
              <Button size="lg">Start Your Free Trial</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Businesses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our customers are saying about LiveLaw.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  "LiveLaw has transformed how we handle legal matters. The AI assistant saves us hours of research
                  time, and the attorney escalation feature gives us peace of mind."
                </p>
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  "As a small business owner, I couldn't afford a full-time lawyer. LiveLaw gives me access to legal
                  expertise at a fraction of the cost."
                </p>
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Owner, Chen's Retail</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  "The document analysis feature has been a game-changer for our contracts. It catches issues our team
                  might miss and explains complex terms clearly."
                </p>
              </div>
              <div>
                <p className="font-semibold">Lisa Rodriguez</p>
                <p className="text-sm text-muted-foreground">Operations Manager, BuildRight Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Legal Operations?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses that trust LiveLaw for their legal needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up" passHref>
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Start Your Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
