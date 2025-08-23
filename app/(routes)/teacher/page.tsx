import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components";
import prisma from "@/lib/prisma";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p>No registrado</p>
    }

    return (
        <div>
            <Header />
        </div>
    );
}