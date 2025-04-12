import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

// Pricing page
export default function PricingPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pt-8">
                <h3 className="text-2xl font-bold">Starter</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $49
                  <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Perfect for small businesses just getting started with legal AI.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>AI Legal Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Document Analysis (10/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1 Custom Legal Agent</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1 User</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/sign-up?plan=starter" passHref>
                    <Button className="w-full">
                      Get Started
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col rounded-lg border-2 border-primary bg-card text-card-foreground shadow-sm">
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="p-6 pt-8">
                <h3 className="text-2xl font-bold">Professional</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $149
                  <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">Ideal for growing businesses with regular legal needs.</p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>AI Legal Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Document Analysis (50/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>5 Custom Legal Agents</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>5 Users</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Attorney Escalation (2 hours/month)</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/sign-up?plan=professional" passHref>
                    <Button className="w-full">
                      Get Started
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pt-8">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $499
                  <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  For businesses with complex legal requirements and larger teams.
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>AI Legal Assistant</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited Document Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited Custom Legal Agents</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>20 Users</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Attorney Escalation (10 hours/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom Integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/sign-up?plan=enterprise" passHref>
                    <Button className="w-full">
                      Get Started
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our pricing? Find answers to common questions below.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">Can I change plans later?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                billing cycle.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">What happens after my free trial?</h3>
              <p className="mt-2 text-muted-foreground">
                After your 14-day free trial, you'll be automatically billed for the plan you selected. You can cancel
                anytime before the trial ends.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">How does attorney escalation work?</h3>
              <p className="mt-2 text-muted-foreground">
                When you need human expertise, simply click the escalate button. You'll be connected with an attorney
                specializing in your issue. Hours are tracked and deducted from your monthly allocation.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">Can I add more users to my plan?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, additional users can be added to any plan for $25/user/month. Contact our sales team for custom
                pricing on large teams.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">Is there a setup fee?</h3>
              <p className="mt-2 text-muted-foreground">
                No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-bold">Do you offer annual billing?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, we offer a 15% discount for annual billing. Contact our sales team to switch to annual billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Need a Custom Solution?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our sales team to discuss your specific requirements and get a tailored quote.
              </p>
            </div>
            <Link href="/contact" passHref>
              <Button size="lg">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
