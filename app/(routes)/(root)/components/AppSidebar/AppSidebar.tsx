"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import Image from "next/image";
import { routes, routesTeacher } from "./AppSidebar.data";

export function AppSidebar() {
    const { state } = useSidebar();
    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="bg-[#131119]">
                <SidebarHeader>
                    <Link href="/" className="flex flex-row items-center ">
                        <Image src="/logo.png" alt="Logo Baile Fusion" width={50} height={50} />
                        {state === "expanded" && (
                            <span className="text-xl font-semibold text-white tracking-wide">
                                Baile Fusion
                            </span>
                        )}
                    </Link>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-[#E9E6ED] text-sm md:text-base">
                        Portal
                    </SidebarGroupLabel>
                    <SidebarMenu className="space-y-2">
                        {routes.map((item) => (
                            <SidebarMenuItem key={item.title} className="text-[#E9E6ED] ">
                                <SidebarMenuButton asChild >
                                    <a href={item.url}>
                                        <div className="p-1 rounded-lg bg-[#E9E6ED]">
                                            <item.icon className="w-4 h-4 text-[#131119]" />
                                        </div>
                                        {state === "expanded" && <span  >{item.title}</span>}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                    <SidebarMenu className="mt-4">
                        <SidebarGroupLabel className="text-[#E9E6ED] text-sm md:text-base">
                            Profesor
                        </SidebarGroupLabel>
                        <SidebarMenuItem>
                            <SidebarMenuSub>
                                {
                                    routesTeacher.map((item) => (
                                        <SidebarMenuSubItem key={item.title} className="m-1" >
                                            <SidebarMenuSubButton href={item.url} className="text-[#E9E6ED] hover:text-[#131119] transition-colors duration-200">
                                                <div className=" p-1 rounded-lg text-[#131119] bg-[#A280FF]">
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                {item.title}
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))
                                }
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}