import prisma from "@/lib/prisma"

export const getUserProgressByDisc = async (
    discId: string,
    userId: string,
): Promise<number> => {

    try {
        const purchase = await prisma.purchase.findFirst({
            where: {
                userId: userId,
                discId: discId,
            },
        })

        if (!purchase) {
            return 0;
        }

        const totalMusics = await prisma.music.count({
            where: {
                discId
            }
        })
        if (totalMusics === 0) {
            return 0;
        }

        const completedMusics = await prisma.userProgress.count({
            where: {
                userId,
                isCompleted: true,
                music: {
                    discId
                }
            }
        })
        const progressPercentage = Math.round((completedMusics / totalMusics) * 100);
        return progressPercentage;

    } catch (error) {
        console.log("[GET_USER_PROGRESS_BY_DISC]", error);

        return 0;
    }
}
