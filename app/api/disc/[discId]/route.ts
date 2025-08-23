import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ discId: string }> }
) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { discId } = await params;

        const disc = await prisma.disc.delete({
            where: {
                id: discId,
                userId: userId,
            },
        });

        return NextResponse.json(disc);
    } catch (error) {
        console.log("[COURSE", error);

        return new NextResponse("Internal Error", { status: 500 });
    }
}