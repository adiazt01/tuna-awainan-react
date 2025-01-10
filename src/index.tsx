import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
})

const queryClient = new QueryClient()

export function Index() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}