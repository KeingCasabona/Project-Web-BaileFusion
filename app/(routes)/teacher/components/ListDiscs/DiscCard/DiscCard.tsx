import { DiscCardProps } from "./DiscCard.type";
import Image from "next/image";

export function DiscCard(props: DiscCardProps) {
    const { disc } = props;
    const { id, title, price, imageUrl, description, isPublished } = disc;
    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col lg:flex-row gap-4 items-start w-full">
                    <Image
                        src={imageUrl || "/default-image-disc.png"}
                        alt="Disco"
                        width={100}
                        height={100}
                        className="rounded-md max-m-52"
                    />
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium">{title}</h2>
                            {isPublished ? (
                                <span className="inline-block bg-[#A280FF] text-white text-xs font-medium px-2 py-1 rounded-md">
                                    Publicado
                                </span>
                            ) : (
                                <span className="inline-block bg-[#403A68] text-[#E9E6ED] text-xs font-medium px-2 py-1 rounded-md">
                                    Sin publicar
                                </span>
                            )}
                        </div>
                        {description && (
                            <p className="text-[#E9E6ED] w-full max-w-lg line-clamp-1 text-sm">
                                {description}
                            </p>
                        )}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex items-center text-sm mt-2 gap-2">
                                <span className="text-[#A280FF]">Precio:</span>
                                <span className="font-semibold text-[#E9E6ED]"> S/ </span>
                                <span className="font-semibold text-[#E9E6ED]"> {price || 0}</span>
                            </div>

                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}