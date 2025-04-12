import Link from "next/link"
import { ArrowRight, Building, GraduationCap, Scale, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

// About page
export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About LiveLaw</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We're on a mission to make legal expertise accessible to every business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  LiveLaw was founded with a simple but powerful mission: to democratize legal expertise for small and
                  medium-sized businesses.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe that every business, regardless of size, deserves access to high-quality legal guidance
                  without the prohibitive costs of traditional legal services.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  By combining cutting-edge AI technology with human legal expertise, we're creating a new paradigm for
                  legal services that's more accessible, efficient, and affordable.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-xl border bg-background">
                <div className="h-[400px] w-full bg-muted flex items-center justify-center text-muted-foreground">
                  <Scale className="h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a diverse team of legal experts, technologists, and business leaders passionate about transforming
                legal services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                  [Photo]
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  Former corporate attorney with 15+ years of experience at top law firms.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                  [Photo]
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  AI researcher and engineer with expertise in natural language processing.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                  [Photo]
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Lisa Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Chief Legal Officer</p>
                <p className="text-sm text-muted-foreground">
                  Former general counsel with extensive experience in business law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {/* Value 1 */}
            <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe legal expertise should be accessible to all businesses, not just those with large legal
                  budgets.
                </p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Scale className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards in all our interactions and advice.
                </p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with legal technology.
                </p>
              </div>
            </div>
            {/* Value 4 */}
            <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Empowerment</h3>
                <p className="text-muted-foreground">
                  We empower businesses to make informed legal decisions with confidence.
                </p>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Us on Our Mission</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the future of legal services for your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/sign-up" passHref>
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
