import { currentUser } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";

import { Header } from "./components";
import { ListDiscs } from "./components/ListDiscs";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p className="flex flex-col text-[#E9E6ED] py-4 px-6">No registrado</p>
    }

    const discs = await prisma.disc.findMany({
        where: {
            userId: user.id,
        }
    })

    return (
        <div>
            <Header />
            <ListDiscs discs={discs} />
        </div>
    );
}