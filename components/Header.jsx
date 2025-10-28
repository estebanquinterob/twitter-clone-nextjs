import Link from "next/link";

export default function Header() {
    return (
        <div className="p-8 bg-blue-500 text-amber-50 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Twitter Clone</h1>
            <nav>
                <ul className="flex gap-10">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>
        </div>
    );
}

// h1 --> titulo mas grande o logo
// el header con un color de fondo y el main con un degradado de colores claros