import { currentUser } from "@clerk/nextjs/server";
import { ProgressDiscProps } from "./ProgressDisc.types";
import { getUserProgressByDisc } from "@/actions/getUserProgressByDisc";

export async function ProgressDisc(props: ProgressDiscProps) {
    const { discId, totalMusics, price } = props;
    const user = await currentUser()

    if (!user) {
        return <p className="text-xs mt-2">Usuario no registrado</p>
    }

    const progressDisc = await getUserProgressByDisc(user.id, discId);

    console.log(progressDisc);

    return (
        <div className="mt-4">
            {totalMusics > 0 && progressDisc > 0 ? (
                <div>
                    <p>Progreso {progressDisc}</p>
                </div>
            ) : (
                <h4>{price}</h4>
            )}

        </div>
    )

}