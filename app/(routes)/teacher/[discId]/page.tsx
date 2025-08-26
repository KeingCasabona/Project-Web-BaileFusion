import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { DiscForm, DiscImage, DiscPrice, HeaderDisc } from "./components";


export default async function DiscPage({ params, }: { params: Promise<{ discId: string }>; }) {
    const { discId } = await params;
    const { userId } = await auth();

    if (!userId) {
        return <p className="flex flex-col text-[#E9E6ED] py-4 px-6">No tienes permiso para ver este disco</p>;
    }

    const disc = await prisma.disc.findUnique({
        where: {
            id: discId,
            userId: userId,
        },
        include: {
            music: true,
        },
    });

    if (!disc) {
        return <p className="flex flex-col text-[#E9E6ED] py-4 px-6">Este disco no existe</p>;
    }

    return (
        <div className="m-6">
            <HeaderDisc idDisc={disc.id} isPublished={disc.isPublished} />

            <DiscForm disc={disc} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-[#E9E6ED]">
                <DiscImage idDisc={disc.id} imageDisc={disc.imageUrl} />

                <DiscPrice idDisc={disc.id} priceDisc={disc.price} />

            </div>
            <p className="text-[#E9E6ED]">Músicas del Disco</p>

        </div>
    );
}