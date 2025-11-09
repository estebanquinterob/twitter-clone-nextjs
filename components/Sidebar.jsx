import NavLink from "./NavLink";


export default function Sidebar() {
    return (
        <aside className="bg-gray-100 p-4 rounded-lg">
            <nav className="flex flex-col space-y-4 text-gray-700">
                <NavLink href="/" > Home </ NavLink>
                <NavLink href="#" > Explore </ NavLink>
                <NavLink href="#" > Notifications </ NavLink>
                <NavLink href="#" > Messages </ NavLink>
                <NavLink href="#" > Bookmarks </ NavLink>
                <NavLink href="#" > Lists </ NavLink>
                <NavLink href="#" > Profile </ NavLink>
                <NavLink href="#" > More </ NavLink>
            </nav>
        </aside>
    );
}
