import { LoginForm } from '@/components/auth/form/LoginForm'
import { createFileRoute } from '@tanstack/react-router'
import { GalleryVerticalEnd } from 'lucide-react'

export const Route = createFileRoute('/auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className="grid h-full lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          TUNA AWAINAN
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="relative hidden bg-muted lg:block">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP._cKTWK21O1gjlJs8bm0xowAAAA&pid=Api"
        alt="Image"
        className="absolute inset-0 h-full w-full object-fill"
      />
    </div>
  </div>)
}
