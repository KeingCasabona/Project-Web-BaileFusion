import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ discId: string }> }
) {
    try {
        const { userId } = await auth();
        const { discId } = await params;

        const { list } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const ownDisc = await prisma.disc.findUnique({
            where: {
                id: discId,
                userId: userId,
            },
        });

        if (!ownDisc) {
            return new NextResponse("Disc not found", { status: 404 });
        }

        for (const item of list) {
            await prisma.music.update({
                where: {
                    id: item.id,
                },
                data: {
                    position: item.position,
                },
            });
        }
        return new NextResponse("Success", { status: 200 });
    } catch (error) {
        console.log("[DISC_MUSIC_REORDER]", error);

        return new NextResponse("Internal server error", { status: 500 });
    }
}
