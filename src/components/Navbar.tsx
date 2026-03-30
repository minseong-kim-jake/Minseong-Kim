import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "PROFILE", path: "/" },
    { name: "CAREER", path: "/career" },
    { name: "ACTIVITIES", path: "/activities" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-4 md:py-5 flex justify-between items-center bg-white/80 backdrop-blur-sm">
      <Link to="/" className="text-2xl font-bold tracking-tighter">
        김민성
      </Link>
      <ul className="flex items-center space-x-6 md:space-x-12">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                "text-xs md:text-sm tracking-widest transition-all duration-300 hover:opacity-100",
                location.pathname === item.path
                  ? "opacity-100 font-medium border-b border-black"
                  : "opacity-40"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
