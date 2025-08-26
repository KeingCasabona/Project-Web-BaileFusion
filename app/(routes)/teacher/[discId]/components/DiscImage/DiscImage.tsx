'use client'
import { FileImage, Pencil } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { DiscImageProps } from "./DiscImage.type";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";
import axios from "axios";

export function DiscImage(props: DiscImageProps) {
    const { idDisc, imageDisc } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState(imageDisc);
    const onchangeImage = async (imageUrl: string) => {
        // console.log(imageUrl)
        try {
            axios.patch(`/api/disc/${idDisc}`, {
                imageUrl: imageUrl,
            });
            toast("Imagen actualizada correctamente", {
                style: { background: "#16a34a", color: "white" }, // verde
            })
        } catch {
            toast("Ha ocurrido un error", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });
        }
    }

    return <div className="p-4 rounded-lg bg-[#1E182E] h-fit" >
        <TitleBlock title="Imagen del Disco" icon={FileImage} />

        {isEditing ? (
            <div className="bg-slate-400 p-4 nt-2 rounded-lg">
                <UploadButton
                    endpoint={"imageUploader"}
                    onClientUploadComplete={(res) => {
                        onchangeImage(res[0]?.ufsUrl);
                        setImage(res[0]?.ufsUrl);
                        setIsEditing(false);
                    }}
                    onUploadError={() => {
                        toast("Ha ocurrido un error", {
                            style: { background: "#dc2626", color: "white" }, // rojo
                        });
                    }}
                />
            </div>
        ) : (
            <Image src={image || "/default-image-disc.png"} alt="Disco" className="rounded-md" width={500} height={250} />
        )}

        <Button
            className="w-full mt-4 bg-emerald-700 text-[#E9E6ED] border-0 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
        >
            <Pencil className="w-4 h-4 " />
            Cambiar imagen
        </Button>
    </div>
}