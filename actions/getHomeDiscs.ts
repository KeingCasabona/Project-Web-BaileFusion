
import prisma from "@/lib/prisma";
import { Disc, Music } from "@prisma/client";


export const getHomeDiscs = async (): Promise<
    (Disc & { music: Music[] })[]
> => {
    try {
        const discs = await prisma.disc.findMany({
            where: { isPublished: true },
            orderBy: { createdAt: "desc" },
            include: {
                music: {
                    where: { isPublished: true },
                },
            },
        });
        return discs
    } catch (error) {
        console.log("[GET_HOME_DISCS]", error);
        return [];
    }
};