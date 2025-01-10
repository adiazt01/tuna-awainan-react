import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/core/sidebar'

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
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
