"use client"
import { useState } from "react";
import { HeaderDiscProps } from "./HeaderDisc.types";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";

export function HeaderDisc(props: HeaderDiscProps) {
    const { idDisc, isPublished } = props;
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <div>
            <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Button onClick={() => router.push("/teacher")}>
                        <MoveLeft />
                        Volver a todos los discos
                    </Button>

                    <div className="gap-2 flex items-center">
                        {!isPublished ? (
                            <Button
                                className="bg-red-950 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                                variant={"outline"}
                                onClick={() => console.log("Despublicar")}
                                disabled={isLoading}
                            >
                                Despublicar
                                <EyeOff />
                            </Button>
                        ) : (
                            <Button
                                className="bg-emerald-950 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                                disabled={isLoading}
                                onClick={() => console.log("Publicar")}
                            >
                                Publicar
                                <Eye />
                            </Button>
                        )}

                        <Button
                            className="border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                            variant="destructive"
                            onClick={() => console.log("Eliminar")}>
                            <Trash />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
