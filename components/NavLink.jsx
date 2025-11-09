"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${
                isActive ? "md:bg-blue-600 rounded-full md:text-white md:font-bold md:py-2 px-4" : " md:py-2 px-4"
            } md:hover:bg-blue-600 hover:text-white rounded-full transition-colors`}
        >
            {children}
        </Link>
    );
}