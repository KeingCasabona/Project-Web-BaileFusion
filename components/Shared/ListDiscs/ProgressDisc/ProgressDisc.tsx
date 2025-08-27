import { currentUser } from "@clerk/nextjs/server";
import { ProgressDiscProps } from "./ProgressDisc.types";
import { getUserProgressByDisc } from "@/actions/getUserProgressByDisc";
import { Progress } from "@radix-ui/react-progress";
import { formatPrice } from "@/lib/formatPrice";

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
                    <Progress value={progressDisc} className="[&>*]:bg-violet-300" />
                    <p className="text-xs mt-1">{progressDisc}% Completado</p>
                </div>
            ) : (
                <h4>{formatPrice(price)}</h4>
            )}
        </div>
    )

}