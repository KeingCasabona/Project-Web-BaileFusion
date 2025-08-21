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
import { routes } from "./AppSidebar.data";
import { spawn } from "child_process";
import { Span } from "next/dist/trace";


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
                        {
                            routes.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <div className="p-1 rounded-lg text-[#131119] bg-white">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            {state === "expanded" && <span className="text-[#E9E6ED]" >{item.title}</span>}
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}