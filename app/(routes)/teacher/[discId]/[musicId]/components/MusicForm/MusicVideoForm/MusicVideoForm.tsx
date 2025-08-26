"use client"
import { ArrowDown, Video } from "lucide-react";
import { TitleBlock } from "../../../../components";
import { MusicVideoFormProps } from "./MusicVideoForm.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

export function MusicVideoForm(props: MusicVideoFormProps) {
    const { musicId, discId, videoUrl } = props;
    const [onEditVideo, setOnEditVideo] = useState(false);

    const router = useRouter();

    const onSubmit = async (url: string) => {
        try {
            await axios.patch(`/api/disc/${discId}/music/${musicId}`, {
                videoUrl: url
            });
            toast("Video actualizado", {
                style: { background: "#16a34a", color: "white" }, // verde
            });
            router.refresh();
        } catch {
            toast("Ocurrió un error", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });
        }



    };

    return (
        <div className="mt-6 p-6 bg-[#1E182E] text-[#E9E6ED] rounded-md">
            <TitleBlock title="Editar el video" icon={Video} />

            {videoUrl ? (
                <video src={videoUrl} controls className="rounded-md" />
            ) : (
                <p>No hay video</p>
            )}
            <div className="mt-4 p-2 rounded-md border">
                <Button
                    className="bg-emerald-700 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
                    variant="secondary"
                    onClick={() => setOnEditVideo((prev) => !prev)} // 👈 toggle
                >
                    {onEditVideo ? (
                        <>
                            Selecciona el video abajo
                            <ArrowDown className="w-4 h-4 ml-2" />
                        </>
                    ) : (
                        <>{videoUrl ? "Editar video" : "Subir video"}</> /* 👈 depende de si hay video */
                    )}
                </Button>

                {onEditVideo && (
                    <UploadButton
                        className="w-full bg-[#0D0C11] rounded-md p-2 mt-2 "
                        endpoint="musicVideo"
                        onClientUploadComplete={(url) => {
                            console.log(url);

                            if (url) {
                                onSubmit(url[0].serverData.url);
                                setOnEditVideo(false); // 👈 cerrar automáticamente después de subir
                            }
                        }}
                    />
                )}
            </div>
        </div>
    )
}