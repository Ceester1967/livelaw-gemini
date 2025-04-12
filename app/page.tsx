import { LandingHero } from "@/components/landing/hero"
import { LandingNavbar } from "@/components/landing/navbar"
import { LandingFeatures } from "@/components/landing/features"
import { LandingTestimonials } from "@/components/landing/testimonials"
import { LandingPricing } from "@/components/landing/pricing"
import { LandingFooter } from "@/components/landing/footer"

// Home page component - the landing page of the application
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation bar for the landing page */}
      <LandingNavbar />

      <main className="flex-1">
        {/* Hero section with main value proposition */}
        <LandingHero />

        {/* Features section highlighting key capabilities */}
        <LandingFeatures />

        {/* Testimonials from satisfied customers */}
        <LandingTestimonials />

        {/* Pricing plans */}
        <LandingPricing />
      </main>

      {/* Footer with links and information */}
      <LandingFooter />
    </div>
  )
}
