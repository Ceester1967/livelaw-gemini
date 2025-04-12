import { authMiddleware } from "@clerk/nextjs"

// This middleware protects all routes including api/trpc routes
export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/", // Landing page
    "/sign-in(.*)", // Sign in page and all sub-routes
    "/sign-up(.*)", // Sign up page and all sub-routes
    "/api/webhook(.*)", // Webhooks
    "/terms", // Terms of service
    "/privacy", // Privacy policy
    "/cookies", // Cookie policy
    "/blog", // Blog
    "/contact", // Contact page
  ],

  // Routes that can be accessed by unauthenticated users but
  // have authentication data if the user is signed in
  ignoredRoutes: [
    "/api/public(.*)", // Public API routes
  ],
})

// Configuration for Clerk middleware
export const config = {
  // Matcher tells the middleware to run on specific paths
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
