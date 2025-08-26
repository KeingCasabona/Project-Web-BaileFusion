"user client"
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ discId: string, musicId: string }> }
) {
    try {
        const { userId } = await auth();
        const { discId, musicId } = await params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const music = await prisma.music.update({
            where: {
                id: musicId,
                // discId: discId, 
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(music);
    } catch (error) {
        console.log("[DISC_MUSIC_UPDATE]", error);

        return new NextResponse("Internal server error", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ discId: string; musicId: string }> }
) {
    try {
        const { userId } = await auth();
        const { discId, musicId } = await params;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const music = await prisma.music.delete({
            where: {
                id: musicId,
                discId: discId,
            },
        });
        return NextResponse.json(music);
    } catch (error) {
        console.log("[DISC_MUSIC_DELETE]", error);
        return new NextResponse("Internal server error", { status: 500 })
    }
}