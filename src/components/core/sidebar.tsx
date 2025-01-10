import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Link } from "@tanstack/react-router"
   
  export function AppSidebar() {
    return (
      <Sidebar >
        <SidebarHeader />
        <SidebarContent className="">
          <SidebarGroup />
          <SidebarGroup >
            <Button asChild variant={"sidebarLink"} size={"sidebarLink"}>
                <Link to="/">Home</Link>
            </Button>
        </SidebarGroup>

        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }