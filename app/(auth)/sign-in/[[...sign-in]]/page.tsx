import { SignIn } from "@clerk/nextjs"

// Sign-in page using Clerk's pre-built component
export default function SignInPage() {
  return (
    <div className="w-full max-w-md">
      {/* Clerk's SignIn component with custom appearance */}
      <SignIn
        appearance={{
          elements: {
            // Customize the card that contains the sign-in form
            card: "shadow-md rounded-lg bg-white dark:bg-gray-900",
            // Customize the primary button (sign in button)
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
          },
        }}
        // Redirect to the dashboard after sign-in
        redirectUrl="/dashboard"
      />
    </div>
  )
}
