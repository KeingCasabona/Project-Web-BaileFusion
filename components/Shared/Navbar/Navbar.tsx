import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
    return (
        <div className="flex justify-between p-4 border-b bg-[#131119] h-16">
            <SidebarTrigger className="text-white" />
        </div>
    )
}