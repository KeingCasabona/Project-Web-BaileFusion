import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function DiscsPage() {
  const discs = await prisma.disc.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      imageUrl: true,
    },
  });

  return (
    <div className="mx-6 my-4 text-[#E9E6ED]">
      <h1 className="text-2xl font-semibold mb-2">Todos los Discos</h1>
      <p className="text-sm text-white/80 mb-6 max-w-2xl">
        Explora los discos publicados y elige tus favoritos.
      </p>

      {discs.length === 0 ? (
        <p className="text-white/80">No hay discos publicados por ahora.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {discs.map((disc) => (
            <div key={disc.id} className="bg-[#1E182E] rounded-md p-4 flex flex-col gap-3">
              <div className="aspect-video relative rounded-md overflow-hidden bg-black/10">
                <Image
                  src={disc.imageUrl || "/default-image-disc.png"}
                  alt={disc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-medium line-clamp-1">{disc.title}</h2>
                {disc.description && (
                  <p className="text-sm text-white/80 line-clamp-2">{disc.description}</p>
                )}
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-sm text-white/80">Precio:</span>
                <span className="font-semibold">S/ {disc.price ?? 0}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
