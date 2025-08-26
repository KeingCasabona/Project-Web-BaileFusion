"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function ExploreDiscs() {
    const router = useRouter();
    return (
        <div>
            <div className="my-4 mx-6 rounded-lg bg-[#1E182E] text-[#E9E6ED]">
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4">
                    <div className="p-6 flex flex-col gap-3">
                        <h1 className="text-2xl font-semibold">
                            Explora todos los discos
                        </h1>
                        <p className="text-balance text-sm  max-w-2xl">
                            El nuevo estilo que combina la energía del reguetón, la pasión de la salsa, el ritmo del merengue y mucho más.
                        </p>
                        <p className="text-balance text-sm  max-w-2xl">
                            Aquí no solo aprendes a bailar: vives la música a través de coreografías diseñadas especialmente para entrenar y divertirte en las pistas de baile de los gimnasios.
                        </p>
                        <p className="text-balance text-sm  max-w-2xl">
                            Nuestros contenidos están organizados en discos, cada uno con alrededor de 20 canciones coreografiadas.
                        </p>
                        <p className="text-balance text-sm  max-w-2xl">
                            👉 Podrás comprar tus discos favoritos, ensayar en casa y seguir avanzando a tu propio ritmo.
                        </p>
                        <p className="text-balance text-sm max-w-2xl">
                            Al crear tu usuario, tendrás acceso a tus discos comprados y podrás disfrutar de todas las coreografías donde quieras y cuando quieras.
                        </p>
                        <p className="text-balance text-sm max-w-2xl">
                            💃🏽 Entrena, aprende y disfruta con la mejor mezcla de estilos en un solo lugar.
                            Baile Fusión: el ritmo que se vive dentro y fuera del gimnasio.
                        </p>
                        <Button className="w-fit  bg-[#A280FF] text-[#E9E6ED] hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer" onClick={() => router.push("/disc")}>
                            Tu momento es ahora
                        </Button>
                    </div>
                    <div className="flex items-end">
                        <Image
                            src="/explore.jpeg"
                            alt="Explora todos los discos"
                            width={300}
                            height={200}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}