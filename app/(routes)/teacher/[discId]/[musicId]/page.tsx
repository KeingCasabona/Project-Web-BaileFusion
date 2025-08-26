import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { MusicForm } from "./components/MusicForm";

export default async function MusicPage({
    params,
}: {
    params: Promise<{ discId: string, musicId: string }>;
}) {

    const { discId, musicId } = await params;
    const { userId } = await auth();

    if (!userId) {
        return <p className="text-[#E9E6ED] m-6">No tienes permisos para ver esta música</p>
    }
    const music = await prisma.music.findUnique({
        where: {
            id: musicId,
            discId: discId,
        },
    });

    if (!music) {
        return <p className="text-[#E9E6ED] m-6">Esta música no existe</p>
    }

    return (
        <div className="text-[#E9E6ED] m-6">
            <MusicForm music={music} discId={discId} />
        </div>
    );
}