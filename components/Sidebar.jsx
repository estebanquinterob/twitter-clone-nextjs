"use client";

import NavLink from "./NavLink";
import { Home, Compass, Bell, Mail, Bookmark, List, User } from "lucide-react";


export default function Sidebar() {

    const navItems = [
        { href: "/home", label: "Inicio", icon: Home },
        { href: "/explore", label: "Explorar", icon: Compass },
        { href: "/notifications", label: "Notificaciones", icon: Bell },
        { href: "/messages", label: "Mensajes", icon: Mail },
        { href: "/bookmarks", label: "Guardados", icon: Bookmark },
        { href: "/lists", label: "Listas", icon: List },
        { href: "/profile", label: "Perfil", icon: User },
    ];

    return (
        <aside className="sticky top-20 h-fit">
            <nav className="flex flex-col space-y-2">
                {navItems.map(({ href, label, icon: Icon }) => (
                    <NavLink 
                        key={href}
                        href={href}
                        className="flex-row items-center gap-5 p-3 rounded-lg hover:bg-gray-200 transition"
                    >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{label}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

// <aside className="bg-gray-100 p-4 rounded-lg">
// <nav className="flex flex-col space-y-4 text-gray-700">
//     <NavLink href="/home" > Home </ NavLink>
//     <NavLink href="/explore" > Explore </ NavLink>
//     <NavLink href="/notifications" > Notifications </ NavLink>
//     <NavLink href="/messages" > Messages </ NavLink>
//     <NavLink href="/bookmarks" > Bookmarks </ NavLink>
//     <NavLink href="/lists" > Lists </ NavLink>
//     <NavLink href="/profile" > Profile </ NavLink>
//     <NavLink href="#" > More </ NavLink>
// </nav>
// </aside>