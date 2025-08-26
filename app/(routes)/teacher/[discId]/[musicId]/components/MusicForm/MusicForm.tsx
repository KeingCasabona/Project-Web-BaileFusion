"use client"
import { ArrowLeft, Settings, Trash } from "lucide-react";
import { MusicFormProps } from "./MusicForm.types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TitleBlock } from "../../../components";



export function MusicForm(props: MusicFormProps) {
    const { music, discId } = props;
    const router = useRouter();

    if (!music) {
        return null;
    }

    return (
        <div>
            <div >
                <Button
                    className="mb-2 hover:text-[#0D0C11] hover:bg-[#E9E6ED] cursor-pointer"
                    // variant="outline"
                    onClick={() => router.push(`/teacher/${discId}`)}>
                    <ArrowLeft />
                    Volver a la edición del Disco
                </Button>
                <div className="p-6 mt-6 bg-[#1E182E] rounded-md flex justify-between items-center text-[#E9E6ED]">
                    <TitleBlock title="Configuración de la música" icon={Settings} />
                    <div className="gap-2 flex items-center">
                        {music.isPublished ? (
                            <Button
                                className="bg-amber-400 text-[#0D0C11] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
                                onClick={() => console.log("Ocultar musica")}>
                                Ocultar
                            </Button>
                        ) : (
                            <Button
                                className="bg-emerald-700 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
                                onClick={() => console.log("Publicar musica")}>
                                Mostrar
                            </Button>
                        )}
                        <Button
                            className="border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
                            variant="destructive"
                            onClick={() => console.log("Eliminar musica")}>
                            <Trash />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}