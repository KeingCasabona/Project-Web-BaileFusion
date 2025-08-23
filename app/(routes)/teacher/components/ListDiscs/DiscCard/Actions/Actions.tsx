import { Button } from "@/components/ui/button";
import { ActionsProps } from "./Actions.types";
import { Edit } from "lucide-react";

export function Actions(props: ActionsProps) {
    const { discId } = props;
    return (
        <div className="flex flex-col gap-2 items-center w-full lg:max-w-42">
            <Button className="bg-[#E9E6ED] text-[#0D0C11] hover:bg-[#A280FF] hover:text-[#E9E6ED]">
                Editar <Edit className="w-4 h-4" />
            </Button>
        </div>
    );
}