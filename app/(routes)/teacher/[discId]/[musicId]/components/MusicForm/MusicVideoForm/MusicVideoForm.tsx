"use client"
import { Pencil, Video } from "lucide-react";
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
            toast("Video actualizado");
            router.refresh();
        } catch {
            toast("Ocurrió un error");
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
                <Button variant="secondary" onClick={() => setOnEditVideo(true)}>
                    {onEditVideo ? "selecciona el video" : "Editar video"}
                    <Pencil className="w-4 h-4" />
                </Button>

                {onEditVideo && (
                    <UploadButton
                        className="w-full bg-[#0D0C11] rounded-md p-2 mt-2"
                        endpoint="musicVideo"
                        onClientUploadComplete={(url) => {
                            console.log(url);

                            if (url) {
                                onSubmit(url[0].serverData.url);
                            }
                        }}
                    />
                )}
            </div>
        </div>
    )
}