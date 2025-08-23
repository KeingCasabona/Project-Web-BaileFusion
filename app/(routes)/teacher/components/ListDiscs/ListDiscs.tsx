
import { DiscCard } from "./DiscCard";
import { ListDiscsProps } from "./ListDiscs.types";

export function ListDiscs(props: ListDiscsProps) {

    const { discs } = props;

    if (discs.length === 0) {
        return <p> No hay discos creados</p>
    }
    return (
        <div className="flex flex-col my-4 mx-6 text-[#E9E6ED] pt-4 gap-8">
            {discs.map((disc) => (
                <div key={disc.id}>
                    <DiscCard disc={disc} />
                    <div className="h-[0.5px] bg-white/20  w-full mt-2" />
                </div>
            ))}
        </div>



    );
}