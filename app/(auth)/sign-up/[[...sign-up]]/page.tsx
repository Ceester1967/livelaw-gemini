import { SignUp } from "@clerk/nextjs"

// Sign-up page using Clerk's pre-built component
export default function SignUpPage() {
  return (
    <div className="w-full max-w-md">
      {/* Clerk's SignUp component with custom appearance */}
      <SignUp
        appearance={{
          elements: {
            // Customize the card that contains the sign-up form
            card: "shadow-md rounded-lg bg-white dark:bg-gray-900",
            // Customize the primary button (sign up button)
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
          },
        }}
        // Redirect to the dashboard after sign-up
        redirectUrl="/dashboard"
      />
    </div>
  )
}
