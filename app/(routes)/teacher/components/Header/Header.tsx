import { Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { FormCreateDisc } from "./FormCreateDisc";


export function Header() {
    return (
        <div className="my-4 mx-6 border rounded-lg bg-[#281947]">
            <div className="flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl text-white">
                    Panel Profesor
                </h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-[#E9E6ED] text-[#0D0C11]  hover:bg-[#A280FF] hover:text-[#E9E6ED]">
                            Crear disco
                            <Plus />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Crea tu disco</DialogTitle>
                            <FormCreateDisc />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}