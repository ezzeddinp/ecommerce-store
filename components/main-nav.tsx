"use client"

import dynamic from "next/dynamic";
import React from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'react-responsive';
// Import the necessary components
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
} from '../components/ui/dropdown-menu';


import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";

interface MainNavProps {
  data: Category[];
}


const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const isLaptopOrAbove = useMediaQuery({ minWidth: 1024 });

  const routes = data.map((route) => ({
    href: `/category/${route.id}`, // the route.id means refer to [categoryId] that we made
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={cn("flex items-center overflow-x-hidden space-x-4 lg:space-x-4")}>
      {isLaptopOrAbove ? (
        // Render the menu as regular links for laptop and above dimensions
        routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-black dark:text-white" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      ) : (
        // Render the dropdown menu for mobile dimensions
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="custom-dropdown-trigger">
            <button className="focus:outline-none">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className="h-5 w-5"
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="custom-dropdown-menu">
            {routes.map((route) => (
              <DropdownMenuItem key={route.href}>
                <Link href={route.href}>
                  <p
                    className={cn(
                      "block px-4 py-2 text-sm text-primary ",
                      route.active ? "font-extrabold text-white" : "text-primary"
                    )}
                  >
                    {route.label}
                  </p>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default MainNav;
