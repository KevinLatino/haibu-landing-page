"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HaibuLogo from "../../../public/haibu-logos/haibu1.svg";
import { NavItem } from "@/types/landing-page/navbar";

const navItems: NavItem[] = [
    { title: "Home", url: "/#home" },
    { title: "Features", url: "/#features" },
    { title: "Chopin Framework", url: "/#chopin" },
    { title: "Social Media", url: "/#socialmedia" },
];

const sections = ["home", "features", "chopin", "socialmedia"];

const LandingNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            const offset = 400;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight - offset && rect.bottom >= offset) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className={`fixed top-0 z-30 w-full mx-auto transition-all duration-300 px-4 ${isScrolled ? "mt-2" : "md:mt-0 mt-0"}`}>
            <nav
                className={`flex items-center justify-between transition-[max-width] duration-500 px-[2.3rem] mx-auto ${
                    isScrolled ? "py-2" : "py-4"
                } ${isScrolled ? "md:w-max" : "max-w-full"} text-[16px] font-medium rounded-full ${
                    isScrolled ? "text-gray-600 dark:text-gray-200 bg-white/50 shadow-lg ring-1 backdrop-blur ring-white/10" : ""
                }`}
            >
                <Link href="/">
                    <Image
                        src={HaibuLogo}
                        alt="Haibu Logo"
                        width={80}
                        height={80}
                        className={`mr-6 cursor-pointer transition-all duration-200 ${isScrolled ? "h-[2.4rem] ml-2 mt-[3.5px] w-auto" : "md:h-[4.5rem] h-[3rem] w-auto"}`}
                    />
                </Link>

                <ul className={`my-auto hidden md:flex space-x-4 transition-all duration-300 ${isScrolled ? "text-[17.5px]" : "text-lg"}`}>
                    {navItems.map(({ title, url }) => (
                        <li key={title}>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollToSection(url.slice(2));
                                }}
                                className={`relative hover:text-haibu-purple block px-2 py-2 transition-colors duration-300 ${
                                    activeSection === url.slice(2) ? "text-haibu-purple" : "text-gray-600"
                                }`}
                            >
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-2 px-4 py-4">
                        {navItems.map(({ title, url }) => (
                            <li key={title}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollToSection(url.slice(2));
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block hover:text-blue-500 px-2 py-2 transition-colors duration-300 ${
                                        activeSection === url.slice(2) ? "text-blue-500" : "text-gray-600"
                                    }`}
                                >
                                    {title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LandingNavbar;
