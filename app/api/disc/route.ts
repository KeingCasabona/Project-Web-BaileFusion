import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const { discName, slug } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const disc = await prisma.disc.create({
            data: {
                userId,
                title: discName,
                slug,
            },
        });
        return NextResponse.json(disc);
    } catch (error) {
        console.log("[DISC]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}