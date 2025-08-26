import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: Promise<{ discId: string }> }) {
    try {
        const { userId } = await auth();
        const { discId } = await params;
        const { title } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const disc = await prisma.disc.findUnique({
            where: {
                id: discId,
                userId: userId,
            },
        });

        if (!disc) {
            return new NextResponse("Disco no encontrado", { status: 404 });
        }

        const musicCount = await prisma.music.count({
            where: { discId: discId },
        });

        const music = await prisma.music.create({
            data: {
                title,
                discId: discId,
                position: musicCount + 1,
            },
        });

        return NextResponse.json(music);



    } catch (error) {
        console.log("[DISC_MUSIC]", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}