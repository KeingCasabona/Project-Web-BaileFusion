import { Button } from "@/components/ui/button";
import { ActionsProps } from "./Actions.types";
import { Edit, Trash } from "lucide-react";

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

export function Actions(props: ActionsProps) {
    const { discId } = props;
    return (
        <div className="flex flex-col gap-2 items-center w-full lg:max-w-42">
            <Button className=" bg-[#A280FF] text-[#E9E6ED]  hover:bg-[#E9E6ED] hover:text-[#0D0C11] w-full">
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
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}