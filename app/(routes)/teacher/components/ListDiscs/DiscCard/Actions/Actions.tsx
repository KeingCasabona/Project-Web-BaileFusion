"use client"
import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";

import { ActionsProps } from "./Actions.types";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";


export function Actions(props: ActionsProps) {
    const { discId } = props;

    const router = useRouter();

    const onEdit = () => {
        router.push(`/teacher/${discId}`);
    }

    const deleteDisc = () => {
        axios.delete(`/api/disc/${discId}`);
        toast("Disco eliminado correctamente");
        router.refresh();
    };

    return (
        <div className="flex flex-col gap-2 items-center w-full lg:max-w-42">
            <Button className=" bg-[#A280FF] text-[#E9E6ED]  hover:bg-[#E9E6ED] hover:text-[#0D0C11] w-full" onClick={onEdit}>
                Editar <Edit className="w-4 h-4" />
            </Button>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full text-[#E9E6ED] border-0 bg-red-500 hover:text-red-500  hover:border-red-500"
                    >
                        Eliminar<Trash className="w-4 h-4" />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás completamente seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Se borrará el disco y sus canciones.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={deleteDisc}>Eliminar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}