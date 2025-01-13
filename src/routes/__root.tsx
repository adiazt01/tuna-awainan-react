import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/core/sidebar'
import { Toaster } from "@/components/ui/toaster"
import './index.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
          <main className='flex-auto m-0 p-0'>
            {/* <SidebarTrigger /> */}

            <Outlet />
          </main>
      </SidebarProvider>
      <Toaster />
    </>
  )
}
