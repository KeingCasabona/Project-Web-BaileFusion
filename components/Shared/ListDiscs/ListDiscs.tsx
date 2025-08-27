import { Book, Link } from "lucide-react";
import { ListDiscsProps } from "./ListDiscs.types";
import Image from "next/image";
import { IconBadge } from "../IconBadge";
import { ProgressDisc } from "./ProgressDisc";

export function ListDiscs(props: ListDiscsProps) {
    const { title, discs } = props;

    return (
        <div>
            <div className="my-4 mx-6  rounded-lg bg-[#1E182E] text-[#E9E6ED] p-6">
                <h2 className="text-xl font-normal ">{title}</h2>
                <div className="border-b-[1px] py-2" />
                {discs && discs.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                        {discs.map(({ id, imageUrl, title, price, slug, musics }) => (
                            <Link key={id} href={`/discs/${slug}`}>
                                <span>xxxxxxxxxxxxxxxxxxxxx</span>
                                <div className="w-full h-[180px] relative">
                                    <Image
                                        src={imageUrl || "/default-image-disc.png"}
                                        alt={title}
                                        fill
                                        className="object-cover object-center rounded-t-lg"
                                        sizes="(max-width: 500px) 100vw, 1200px"
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                                        {title}
                                    </h3>
                                    <div className="flex items-center gap-2 justify-between mt-2">
                                        <IconBadge icon={Book} text={`${musics.length} Canciones`} />
                                    </div>
                                    <ProgressDisc
                                        discId={id}
                                        totalMusics={musics.length}
                                        price={price}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-4">
                        No hay discos disponibles en este momento.
                    </p>
                )}
            </div>
        </div>
    )
}