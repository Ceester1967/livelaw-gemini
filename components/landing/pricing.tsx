import type React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

// Feature check item component
function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="h-4 w-4 text-primary" />
      <span className="text-sm">{children}</span>
    </div>
  )
}

// Pricing plan component
function PricingPlan({
  name,
  price,
  description,
  features,
  popular = false,
}: {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}) {
  return (
    <Card className={popular ? "border-primary shadow-lg" : ""}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
          <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Popular</div>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="mt-4 flex items-baseline text-3xl font-bold">
          ${price}
          <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-3">
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/sign-up" className="w-full">
          <Button variant={popular ? "default" : "outline"} className="w-full">
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export function LandingPricing() {
  // Pricing plans data
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Essential legal AI tools for small businesses.",
      features: [
        "AI Legal Chat (100 queries/month)",
        "Document Analysis (10 docs/month)",
        "Document Storage (1GB)",
        "Email Support",
      ],
    },
    {
      name: "Business",
      price: "149",
      description: "Comprehensive legal support with attorney access.",
      features: [
        "AI Legal Chat (Unlimited)",
        "Document Analysis (50 docs/month)",
        "Document Storage (10GB)",
        "Attorney Escalation (2 hours/month)",
        "Custom Legal Agents (2)",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "499",
      description: "Full legal department solution for growing businesses.",
      features: [
        "AI Legal Chat (Unlimited)",
        "Document Analysis (Unlimited)",
        "Document Storage (100GB)",
        "Attorney Escalation (10 hours/month)",
        "Custom Legal Agents (Unlimited)",
        "Dedicated Account Manager",
        "API Access",
        "Advanced Analytics",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan that's right for your business. All plans include access to our AI legal assistant.
          </p>
        </div>

        {/* Pricing plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Enterprise contact */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-primary font-medium">
              Contact us
            </Link>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
