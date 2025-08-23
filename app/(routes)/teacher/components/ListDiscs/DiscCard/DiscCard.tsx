import { DiscCardProps } from "./DiscCard.type";
import Image from "next/image";

export function DiscCard(props: DiscCardProps) {
    const { disc } = props;
    const { id, title, price, level, imageUrl, description, isPublished } = disc;
    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col lg:flex-row gap-4 items-start">
                    <Image
                        src={imageUrl || "/default-image-disc.png"}
                        alt="Disco"
                        width={100}
                        height={100}
                        className="rounded-md max-m-52"
                    />
                    <div>
                        <div className="flex items-center gap-6">
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
                    </div>
                </div>
            </div>
        </div>
    )
}