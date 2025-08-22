import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BellRing, LogIn, Search } from "lucide-react";

export function Navbar() {
    return (
        <div className="flex justify-between p-4 border-b bg-[#131119] h-16">
            <SidebarTrigger className="text-white" />
            <div className="flex gap-4 items-center">
                <div className="flex w-full max-w-sm items-center rounded-lg px-2.5 py-0.5">
                    {/* <Search className="h-4 w-4 mr-2.5 text-white" /> */}
                    <Input type="search" placeholder="Buscar..." className="w-full text-white bg-[#403A68] border-0" />
                </div>
                <Button variant="outline" className="bg-[#403A68] text-white border-0" >
                    <BellRing />
                </Button>

                <SignedOut>
                    <SignInButton>
                        <Button>
                            <LogIn />
                            Iniciar sesión
                        </Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </div>
    )
}