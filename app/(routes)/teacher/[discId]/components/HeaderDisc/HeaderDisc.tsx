"use client"
import { useEffect, useState } from "react";
import { HeaderDiscProps } from "./HeaderDisc.types";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export function HeaderDisc(props: HeaderDiscProps) {
    const { idDisc, isPublished } = props;
    const [published, setPublished] = useState(isPublished); // 👈 estado local
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // sincronizar cuando cambien props
    useEffect(() => {
        setPublished(isPublished);
    }, [isPublished]);

    const onPublish = async (state: boolean) => {
        setIsLoading(true);
        try {
            await axios.patch(`/api/disc/${idDisc}`, {
                isPublished: state,
            });

            setPublished(state); // 👈 cambia inmediatamente en el cliente

            if (state) {
                toast("Disco publicado", {
                    style: { background: "#16a34a", color: "white" }, // verde
                });
            } else {
                toast("Disco no publicado", {
                    style: { background: "#facc15", color: "black" }, // amarillo
                });
            }


            router.refresh();
        } catch {
            toast("Ocurrió un error", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });
        }

        setIsLoading(false);
    }

    return (
        <div>
            <div className="mb-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <Button onClick={() => router.push("/teacher")}>
                        <MoveLeft />
                        Volver a todos los discos
                    </Button>

                    <div className="gap-2 flex items-center">
                        {isPublished ? (
                            <Button
                                className="bg-amber-400 text-[#0D0C11] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                                variant={"outline"}
                                onClick={() => onPublish(false)}
                                disabled={isLoading}
                            >
                                Despublicar
                                <EyeOff />
                            </Button>
                        ) : (
                            <Button
                                className="bg-emerald-700 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                                disabled={isLoading}
                                onClick={() => onPublish(true)}
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
