import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { ModeToggle } from "./theme-toggle";


const Navbar = async () => {
    // calling the url from get-categories.tsx 
    // the categories from dashboard will appear in navbar store 
    const categories = await getCategories();

    return (
        <nav className="border-b drop-shadow-md sticky top-0 bg-white dark:bg-black backdrop-blur-lg z-40">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
                    <div className="flex items-center gap-x-6"> {/* Remove flex-grow class */}
                        <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                            <p className="font-black dark:text-white text-2xl">STORE</p>
                        </Link>
                        <div className="flex-1" /> {/* Add a div with flex-1 to create space */}
                        <MainNav data={categories} />
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                        <NavbarActions />
                        <ModeToggle />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;