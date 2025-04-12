import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Testimonial component
function Testimonial({
  quote,
  author,
  role,
  company,
  avatarSrc,
}: {
  quote: string
  author: string
  role: string
  company: string
  avatarSrc?: string
}) {
  // Get initials for avatar fallback
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">"{quote}"</p>
      </CardContent>
    </Card>
  )
}

export function LandingTestimonials() {
  // Testimonials data
  const testimonials = [
    {
      quote:
        "LiveLaw has transformed how we handle legal matters. The AI gives us quick answers, and when we need more help, the attorneys are just a click away.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Bright Solutions Inc.",
    },
    {
      quote:
        "As a startup founder, I can't afford a full-time lawyer. LiveLaw gives me the legal support I need at a fraction of the cost.",
      author: "Michael Chen",
      role: "Founder",
      company: "TechStart",
    },
    {
      quote:
        "The document analysis feature has saved us countless hours reviewing contracts. It highlights potential issues we might have missed.",
      author: "Jessica Rodriguez",
      role: "Operations Director",
      company: "Global Retail Partners",
    },
    {
      quote:
        "Having access to both AI and real attorneys gives us peace of mind. Simple questions get answered instantly, and complex issues get expert attention.",
      author: "David Wilson",
      role: "CFO",
      company: "Innovative Manufacturing",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Businesses of all sizes trust LiveLaw for their legal needs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
