import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components";
import prisma from "@/lib/prisma";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p>No registrado</p>
    }

    const discs = await prisma.disc.findMany({
        where: {
            userId: user.id,
        }
    })

    console.log(discs)

    return (
        <div>
            <Header />
        </div>
    );
}