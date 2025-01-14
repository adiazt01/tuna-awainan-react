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
      <SidebarContent className="flex flex-col justify-center mb-20">
        <SidebarGroup className="px-4">
          <img src="/src/assets/images/TUNA-awainan.png" alt="" className="w-32 h-32 mx-auto"/>
          <h2 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight text-center first:mt-0">
            TUNA
          </h2>
          <h2 className="scroll-m-20 pb-2 text-4xl
          text-primary font-semibold tracking-tight text-center first:mt-0">
            AWAINAN
          </h2>
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-4 overflow-auto">
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/">Inicio</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/novedades">Novedades</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/aquarium">Acuario</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/articles/introArticles">Artículos</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/experto/introExperto">Expertos</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/community/introCommunity">Comunidad</Link>
          </Button>
          <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
            <Link to="/about">Sobre nosotros</Link>
          </Button>
          {
            session ? (
              <Button
                onClick={() => lgoutMutaion.mutate()}
                variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
                Logout
              </Button>
            ) : (
              <Button asChild variant={"sidebarLink"} size={"sidebarLink"} className="text-2xl">
                <Link to="/auth/login">Iniciar sesión</Link>
              </Button>
            )
          }
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}