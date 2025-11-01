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
                isActive ? "text-amber-300 font-bold" : "text-white"
            } hover:text-amber-200 transition-colors`}
        >
            {children}
        </Link>
    );
}