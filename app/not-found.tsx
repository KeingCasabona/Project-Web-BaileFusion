import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="w-full" style={{ display: "grid", minHeight: "100%" }}>
            <div className="flex flex-col items-center justify-center text-center text-[#E9E6ED]">
                <h1 className="text-4xl font-bold ">Error 404</h1>
                <p className="text-lg mt-2">Página no encontrada</p>
                <Button asChild className="bg-[#E9E6ED] text-[#0D0C11] hover:bg-[#A280FF] hover:text-[#E9E6ED] mt-4">
                    <Link href="/" >
                        Volver al inicio
                    </Link>
                </Button>
            </div>
        </section>

    )
}