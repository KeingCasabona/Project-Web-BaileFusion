
import { ListDiscsProps } from "./ListDiscs.types";
import { Disc } from "lucide-react";

export function ListDiscs(props: ListDiscsProps) {

    const { discs } = props;

    if (discs.length === 0) {
        return <p> No hay discos creados</p>
    }
    return (
        <div className="flex flex-col my-4 mx-6 p-4 gap-10 text-[#E9E6ED]">
            {discs.map((disc) => (
                <div key={disc.id}>
                    <p className="flex items-center gap-2">
                        <Disc className="w-4 h-4 text-[#A280FF]" />
                        {disc.title}
                    </p>
                    <div className="h-[0.5px] bg-white/20  w-full mt-2" />
                </div>
            ))}
        </div>
    );
}