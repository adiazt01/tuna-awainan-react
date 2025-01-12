import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Link } from "@tanstack/react-router"
import { useAuth } from "@/hooks/use-auth"
import { logout } from "@/services/auth"
import { useMutation } from "@tanstack/react-query"

export function AppSidebar() {
  const { session } = useAuth()
  const lgoutMutaion = useMutation({
    mutationFn: async () => {
      await logout()
    }
  })

  return (
    <Sidebar >
      <SidebarHeader />
      <SidebarContent className="flex flex-col justify-center my-auto  mb-8">
        <SidebarGroup className="px-4">
          <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight text-center first:mt-0">
            TUNA
          </h2>
          <h2 className="scroll-m-20 border-b pb-2 text-4xl
          text-primary font-semibold tracking-tight text-center first:mt-0">
            AWAINAN
          </h2>
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-6">
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"}>
            <Link to="/about">Home</Link>
          </Button>
          {
            session ? (
              <Button
                onClick={() => lgoutMutaion.mutate()}
                variant={"sidebarLink"} size={"sidebarLink"}>
                Logout
              </Button>
            ) : (
              <Button asChild variant={"sidebarLink"} size={"sidebarLink"}>
                <Link to="/auth/login">Login</Link>
              </Button>
            )
          }
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}