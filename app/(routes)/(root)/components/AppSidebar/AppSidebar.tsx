"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { House } from "lucide-react";
import Link from "next/link";


export function AppSidebar() {
    const { state } = useSidebar();
    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="bg-[#131119]">
                <SidebarHeader>
                    <Link href="/" className="flex flex-row items-center text-[#E9E6ED]">
                        keing
                    </Link>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[#E9E6ED]">
                        Academia Rítmica
                    </SidebarGroupLabel>
                    <SidebarMenu className="space-y-2">
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="/home">
                                    <div className="p-1 rounded-lg text-[#131119] bg-white">
                                        <House className="w-4 h-4" />
                                    </div>
                                    <span className="text-[#E9E6ED]"> Inicio</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}