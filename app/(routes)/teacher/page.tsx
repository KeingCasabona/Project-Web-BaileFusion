import { currentUser } from "@clerk/nextjs/server";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p>No registrado</p>
    }

    return <div>TeacherPage</div>;
}