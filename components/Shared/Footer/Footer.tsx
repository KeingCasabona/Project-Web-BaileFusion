import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-4 px-6 border-t bg-[#131119] w-full">
            <div className="flex justify-between items-center text-sm text-[#403A68]">
                <p>2025 © KeingDev</p>
                <div className="flex gap-6 items-center">
                    <Link href="/privacy-policy">Privavidad</Link>
                    <Link href="/terms">Términos de uso</Link>
                </div>
            </div>
        </footer>
    );
}