import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: Promise<{ discId: string }> }) {
    try {
        const { userId } = await auth();
        const { discId } = await params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const disc = await prisma.disc.update({
            where: {
                id: discId,
                userId: userId,
            },
            data: {
                ...values,
            },
        });
        return NextResponse.json(disc);

    } catch (error) {
        console.log("[DISC]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: { params: Promise<{ discId: string }> }
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