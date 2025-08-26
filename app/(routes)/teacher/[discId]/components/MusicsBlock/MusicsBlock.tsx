"use client"
import { GripVertical, ListCheck, Loader2, Pencil, PlusCircle } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { MusicsBlockProps } from "./MusicsBlock.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormMusicName } from "./FormMusicName";
import { } from "@/components/ui/button";
import { DragDropContext, Droppable, DropResult, Draggable, } from "@hello-pangea/dnd";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export function MusicsBlock(props: MusicsBlockProps) {
    const { idDisc, musics } = props;
    const [musicsList, setMusicsList] = useState(musics ?? []);
    const [showInputMusic, setShowInputMusic] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const router = useRouter()

    const onEditMusic = (musicId: string) => {
        router.push(`/teacher/${idDisc}/${musicId}`)
    };

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(musicsList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setMusicsList(items);

        const bulkUpdate = items.map((music, index) => ({
            id: music.id,
            position: index,
        }));

        onReorder(bulkUpdate);
    };

    const onReorder = async (updateData: { id: string, position: number }[]) => {
        try {
            setIsUpdating(true);
            await axios.put(`/api/disc/${idDisc}/music/reorder`, {
                list: updateData,
            });

            toast("Orden actualizado");
            router.refresh();
        } catch {
            toast("Ocurrió un error");
        } finally {
            setIsUpdating(false);
        }
    };


    return (
        <div className="p-6 bg-[#1E182E] text-[#E9E6ED] rounded-md h-fit relative">
            <TitleBlock title="Músicas del disco" icon={ListCheck} />

            <div className="flex gap-2 items-center justify-between mb-3 text-[#A280FF]" >
                <p>Listado de Canciones:</p>

                <Button className=" bg-amber-950 text-[#E9E6ED] hover:bg-[#E9E6ED] hover:text-[#0D0C11]" size="sm" onClick={() => setShowInputMusic(true)}>
                    <PlusCircle className="w-4 h-4" />
                    Crear música
                </Button>
            </div>
            {showInputMusic && (< FormMusicName setShowInputMusic={setShowInputMusic} idDisc={idDisc} />)}


            {isUpdating && (
                <div
                    className="absolute top-0 right-0 flex items-center justify-center w-full h-full bg-slate-500/20">
                    <Loader2 className="w-6 h-6 animate-spain text-violet-500" />
                </div>
            )}

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="musics">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="flex flex-col gap-2">
                            {musicsList?.map((music, index) => (
                                <Draggable
                                    key={music.id}
                                    draggableId={music.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex gap-2 items-center bg-[#131119] rounded-md
                                        py-2 px-4 text-sm justify-between"
                                        >
                                            <div className="flex gap-2 items-center">
                                                <GripVertical className="w-4 h-4 text-gray-500" />
                                                <p>{music.title}</p>
                                            </div>
                                            <div className="flex gap-2 items-center px-2 py-1">
                                                {music.isPublished ? (
                                                    <p className="px-2 py-1 text-emerald-600">
                                                        Publicado
                                                    </p>
                                                ) : (
                                                    <p className="px-2 py-1 text-amber-500">
                                                        Sin publicar
                                                    </p>
                                                )}
                                                <div className="cursor-pointer"
                                                    onClick={() => onEditMusic(music.id)}
                                                >
                                                    <Pencil className="w-4 h-4 text-gray-500" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}