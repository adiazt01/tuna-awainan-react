import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/core/sidebar'
import { Toaster } from "@/components/ui/toaster"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className='border border-red-500 flex-1'>
          {/* <SidebarTrigger /> */}

          <Outlet />
        </main>
      </SidebarProvider>
      <Toaster />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
