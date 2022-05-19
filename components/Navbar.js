import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else if (window.innerWidth <= 960) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        setMounted(true);
        changeBackground();
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        window.addEventListener("scroll", changeBackground);

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div className="w-[4.5rem] h-9 bg-yellow-400 rounded-full flex items-center justify-between cursor-pointer p-1" onClick={() => setTheme("light")}>
                    <div className="toggle-light flex w-7 h-7 bg-white text-yellow-400 rounded-full overflow-hidden transition ease-in-out">
                        <i className="ai-sun-fill items-center m-auto" />
                    </div>
                    <div className="toggle-dark flex w-7 h-7 bg-darkb text-white rounded-full overflow-hidden transition ease-in-out">
                        <i className="ai-moon-fill items-center m-auto" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className={navbar ? `w-[4.5rem] h-9 bg-darkb rounded-full flex items-center justify-between cursor-pointer p-1` : `w-[4.5rem] h-9 bg-white rounded-full flex items-center justify-between cursor-pointer p-1`} onClick={() => setTheme("dark")}>
                    <div className="toggle-light flex w-7 h-7 bg-yellow-400 text-white rounded-full overflow-hidden transition ease-in-out">
                        <i className="ai-sun-fill items-center m-auto" />
                    </div>
                    <div className="toggle-dark flex w-7 h-7 bg-white text-darkb rounded-full overflow-hidden transition ease-in-out">
                        <i className="ai-moon-fill items-center m-auto" />
                    </div>
                </div>
            );
        }
    };

    return (
        <div className={navbar ? `bg-white dark:bg-darkb bg-opacity-90 backdrop-blur dark:bg-opacity-90 dark:backdrop-blur fixed w-full z-10 text-darkb dark:text-white shadow-lg` : `bg-transparent fixed w-full z-10 text-white`}>
            <div className="px-10 py-5">
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className={`${isMobile ? "pb-4 border-b-2 dark:border-b-slate-800" : ""} flex items-center justify-between lg:border-hidden lg:p-0`}>
                        <div className="flex items-center">
                            <div className="relative rounded-full overflow-hidden w-8 h-8">
                                <Image width={32} height={32} src="/bobogeng-icon.png" alt="" layout="fixed" objectFit="cover" objectPosition="center" quality={100} />
                            </div>
                            <a className="font-bold pl-3" href="#">
                                Bobogeng
                            </a>
                        </div>
                        <button onClick={() => setIsMobile(!isMobile)} className="block focus:outline-none lg:hidden">
                            <i className={`${!isMobile ? "block" : "hidden"} bx bx-menu-alt-right text-3xl`} />
                            <i className={`${isMobile ? "block" : "hidden"} bx bx-x text-3xl`} />
                        </button>
                    </div>
                    <div className={`${isMobile ? "block" : "hidden lg:flex"} flex flex-col lg:flex-row font-medium lg:absolute lg:left-1/2 top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 py-3 lg:p-0`}>
                        <a className="block py-3 lg:px-4 hover:font-bold" href="#home">
                            Home
                        </a>
                        <a className="block py-3 lg:px-4 hover:font-bold" href="#about">
                            About
                        </a>
                        <a className="block py-3 lg:px-4 hover:font-bold" href="#skills">
                            Skills
                        </a>
                        <a className="block py-3 lg:px-4 hover:font-bold" href="#projects">
                            Projects
                        </a>
                        <a className="block py-3 lg:px-4 hover:font-bold" href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className={`${isMobile ? "block" : "hidden lg:flex"} m-auto lg:m-0`}>{renderThemeChanger()}</div>
                </div>
            </div>
        </div>
    );
}
