"use client"
import { ListCheck, PlusCircle } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { MusicsBlockProps } from "./MusicsBlock.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormMusicName } from "./FormMusicName";

export function MusicsBlock(props: MusicsBlockProps) {
    const { idDisc, musics } = props;
    const [MusicsList, setMusicsList] = useState(musics ?? []);
    const [showInputMusic, setShowInputMusic] = useState(false);

    return (
        <div className="p-6 bg-[#1E182E] text-[#E9E6ED] rounded-md h-fit relative">
            <TitleBlock title="Músicas del disco" icon={ListCheck} />

            <div className="flex gap-2 items-center justify-between mb-3">
                <p>Músicas completas</p>

                <Button className=" bg-violet-600 text-[#E9E6ED] hover:bg-[#E9E6ED] hover:text-[#0D0C11]" size="sm" onClick={() => setShowInputMusic(true)}>
                    <PlusCircle className="w-4 h-4" />
                    Crear música
                </Button>
            </div>
            {showInputMusic && (< FormMusicName setShowInputMusic={setShowInputMusic} idDisc={idDisc} />)}
        </div>
    )
}