import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SkillCard from "../components/SkillCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const backgroundBlur = () => {
        if (!mounted) return null;

        if (theme === "dark") {
            return (
                <div className="absolute w-full h-full top-0 left-0 z-[-2] overflow-hidden">
                    <Image src="/pixel-art-landscape-night/Pixel-Art-Landscape-Night.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />;
                </div>
            );
        } else {
            return (
                <div className="absolute w-full h-full top-0 left-0 z-[-2] overflow-hidden">
                    <Image src="/pixel-art-landscape/Pixel-Art-Landscape.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />;
                </div>
            );
        }
    };

    return (
        <Layout title={process.env.appName}>
            <Hero>
                <div id="home" className="absolute top-0 w-full bg-gradient-to-b from-black/40 via-black/0 to-black/40">
                    <div className="px-5 md:px-10 py-8 h-screen flex flex-col">
                        <div className="w-full h-full order-2"></div>
                        <div className="w-full h-fit order-3 md:order-2 flex items-center justify-center md:justify-end">
                            <div className="flex md:flex-col transform text-3xl text-white">
                                <Link href={"https://www.youtube.com/channel/UCw2wRI6MUlyW1T32g8RZ-fg"}>
                                    <a className="flex items-center m-auto px-4 md:px-0 md:py-4 hover:text-slate-300 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                        <i className="bx bxl-youtube rotate-0 md:-rotate-90" />
                                    </a>
                                </Link>
                                <Link href={"https://github.com/Bobogeng"}>
                                    <a className="flex items-center m-auto px-4 md:px-0 md:py-4 hover:text-slate-300 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                        <i className="bx bxl-github rotate-0 md:-rotate-90" />
                                    </a>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/irsal-fathi-farhat-30296921b/"}>
                                    <a className="flex items-center m-auto px-4 md:px-0 md:py-4 hover:text-slate-300 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                        <i className="bx bxl-linkedin rotate-0 md:-rotate-90" />
                                    </a>
                                </Link>
                                <Link href={"https://www.instagram.com/irsal_f.f/"}>
                                    <a className="flex items-center m-auto px-4 md:px-0 md:py-4 hover:text-slate-300 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                        <i className="bx bxl-instagram-alt rotate-0 md:-rotate-90" />
                                    </a>
                                </Link>
                                <Link href={"https://www.facebook.com/irsal.ff/"}>
                                    <a className="flex items-center m-auto px-4 md:px-0 md:py-4 hover:text-slate-300 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                        <i className="bx bxl-facebook rotate-0 md:-rotate-90" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full h-fit md:h-full order-1 md:order-2 flex items-end text-white font-spaceGrotesk pt-16">
                            <div className="flex">
                                <div className="pr-3 text-yellow-400">
                                    <h1 className="text-4xl md:text-5xl font-bold">../</h1>
                                </div>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold pb-3">hello_world</h1>
                                    <p className="text-lg md:text-xl">
                                        {`Welcome to my `}
                                        <b>
                                            <span className="text-yellow-400">{`\${`}</span>
                                            {`portofolio-website`}
                                            <span className="text-yellow-400">{`}`}</span>
                                            <br />
                                            <span className="text-yellow-400">{`Scroll Down `}</span>
                                        </b>
                                        {`if you want to know`}
                                        <br />
                                        {`more about me.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
            <div className="relative bg-white dark:bg-darkb dark:text-white bg-opacity-20 dark:bg-opacity-20">
                <div className="mix-blend-hard-light dark:mix-blend-normal z-[-1] w-24 h-24 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-teal-400 via-teal-800 to-teal-400 dark:from-slate-200 dark:via-slate-600 dark:to-slate-200 blur-[80px] lg:blur-[150px] absolute top-24 left-0 lg:top-24 lg:left-6"></div>
                <div className="mix-blend-hard-light dark:mix-blend-normal z-[-1] w-52 h-52 lg:w-[18rem] lg:h-[18rem] rounded-full bg-gradient-to-br from-green-400 via-green-800 to-green-400 dark:from-slate-200 dark:via-slate-600 dark:to-slate-200 blur-[140px] lg:blur-[200px] absolute top-[50rem] right-0 lg:top-[20rem] lg:right-12"></div>
                <div className="mix-blend-hard-light dark:mix-blend-normal z-[-1] w-24 h-24 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-800 to-yellow-400 dark:from-slate-200 dark:via-slate-600 dark:to-slate-200 blur-[80px] lg:blur-[150px] absolute top-[120rem] left-0 lg:top-[60rem] lg:left-52"></div>
                <div className="mix-blend-hard-light dark:mix-blend-normal z-[-1] w-52 h-52 lg:w-[18rem] lg:h-[18rem] rounded-full bg-gradient-to-br from-red-400 via-red-800 to-red-400 dark:from-slate-200 dark:via-slate-600 dark:to-slate-200 blur-[140px] lg:blur-[200px] absolute top-[200rem] right-0 lg:top-[90rem] lg:right-[18rem]"></div>
                <div id="about" className="px-5 md:px-10 py-16 w-full h-fit">
                    <div className="-ml-10 w-fit pb-5">
                        <div className="flex pl-10 bg bg-slate-300 dark:bg-slate-800 p-1 rounded-r-md">
                            <div className="rounded-md bg-slate-200 dark:bg-slate-700 py-1 px-3 text-slate-400 font-bold">
                                <span className="text-yellow-400 pr-3">../</span>
                                about_me
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl pb-24 xl:pb-12">
                        About
                        <br />
                        <span className="font-bold text-yellow-400">My Profile</span>
                    </h1>
                    <div className="flex flex-col xl:flex-row items-center justify-between">
                        <div className="m-auto order-2 xl:order-1 pt-24 xl:pb-0 flex flex-col text-right items-center xl:items-end">
                            <div className="pb-5">
                                <h1 className="text-2xl sm:text-6xl font-bold text-center xl:text-right">Irsal Fathi Farhat</h1>
                                <p className="text-sm sm:text-base text-slate-400 text-center xl:text-right">
                                    {"//"} Front-end Developer <span className="text-yellow-400">&</span> UI<span className="text-yellow-400">/</span>UX Designer
                                </p>
                            </div>
                            <div className="pb-5">
                                <p className="text-lg sm:text-2xl text-center xl:text-right">
                                    Have an Experience in
                                    <br />
                                    <span className="font-bold">Front-end Developer & UI/UX Designer</span>
                                    <br />
                                    for more than 1 year
                                </p>
                                <p className="text-sm sm:text-base text-slate-400 text-center xl:text-right">{"//"} Indonesia, based in Depok</p>
                            </div>
                            <button className="w-fit bg-yellow-400 text-white font-bold text-xl py-3 px-5 rounded-md hover:bg-yellow-500 active:bg-yellow-600 transition duration-100 focus:ring ring-yellow-600">Download CV</button>
                        </div>
                        <div className="relative order-1 m-auto group">
                            <div className="absolute w-fit h-fit py-5 px-6 rounded-full bg-slate-50 dark:bg-slate-800 -bottom-10 -left-10 z-[2] shadow-lg">
                                <p className="text-xl md:text-2xl text-slate-400">Client</p>
                                <h1 className="text-2xl md:text-7xl text-yellow-400 font-bold">5+</h1>
                            </div>
                            <div className="absolute w-fit h-fit py-5 px-6 rounded-full bg-slate-50 dark:bg-slate-800 -bottom-10 -right-10 z-[2] shadow-lg">
                                <p className="text-sm md:text-lg text-slate-400">
                                    Years of
                                    <br />
                                    Experience
                                </p>
                                <h1 className="text-3xl md:text-5xl text-yellow-400 font-bold">1+</h1>
                            </div>
                            <div className="absolute w-fit h-fit py-5 px-6 rounded-full bg-slate-50 dark:bg-slate-800 top-0 -left-12 md:top-10 md:-left-20 z-[2] shadow-lg">
                                <p className="text-sm md:text-lg text-slate-400">
                                    Complete
                                    <br />
                                    Project
                                </p>
                                <h1 className="text-2xl md:text-5xl text-yellow-400 font-bold">10+</h1>
                            </div>
                            <div className="absolute w-32 h-32 md:w-52 md:h-52 bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-200 rounded-full -top-8 -left-8 md:-top-16 md:-left-16 group-hover:translate-x-[12rem] group-hover:translate-y-[12rem] md:group-hover:translate-x-[19rem] md:group-hover:translate-y-[19rem] group-hover:rotate-180 transition ease-in-out"></div>
                            <div className="absolute w-32 h-32 md:w-52 md:h-52 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800 rounded-full -bottom-8 -right-8 md:-bottom-16 md:-right-16 group-hover:translate-x-[-12rem] group-hover:translate-y-[-12rem] md:group-hover:translate-x-[-19rem] md:group-hover:translate-y-[-19rem] group-hover:rotate-180 transition ease-in-out"></div>
                            <div className="relative w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden z-[1] shadow-lg">
                                <Image className="bg-slate-200 dark:bg-slate-600 object-cover object-[60%]" src="/PP.png" layout="fill" alt="" quality={100} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="skills" className="px-5 md:px-10 py-16 h-fit">
                    <div className="-ml-10 w-fit pb-5">
                        <div className="flex pl-10 bg bg-slate-300 dark:bg-slate-800 p-1 rounded-r-md">
                            <div className="rounded-md bg-slate-200 dark:bg-slate-700 py-1 px-3 text-slate-400 font-bold">
                                <span className="text-yellow-400 pr-3">../</span>
                                skills
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="text-center pb-12">
                            <h1 className="text-4xl md:text-5xl pb-3">
                                This is all of
                                <br />
                                <span className="font-bold text-yellow-400">My Skills</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400">{"//"} As time goes by</p>
                            <p className="text-xl md:text-2xl text-slate-400">
                                <span className="font-bold">Knowledge</span> will continue to be honed as well
                            </p>
                        </div>
                        <div className="container grid grid-rows-3 grid-cols-1 xl:grid-rows-1 xl:grid-cols-3 gap-4 h-fit text-center">
                            <SkillCard>
                                <p className="h-32 flex items-center justify-center text-6xl xl:text-8xl font-black text-yellow-400 pb-5">
                                    {`<`}
                                    <span className="text-darkb dark:text-white">/</span>
                                    {`>`}
                                </p>
                                <h3 className="text-2xl font-bold pb-2">Front-end</h3>
                                <p>
                                    Have studied <span className="font-bold">html</span>, <span className="font-bold">css</span> and <span className="font-bold">javascript</span>. Have also studied several frameworks and libraries of these programming languages like <span className="font-bold">ReactJS</span>, <span className="font-bold">Tailwind</span>, <span className="font-bold">Bootstrap</span>, etc.
                                </p>
                            </SkillCard>
                            <SkillCard>
                                <p className="h-32 flex items-center justify-center text-6xl xl:text-8xl font-black text-yellow-400 pb-5">
                                    {`UI`}
                                    <span className="text-darkb dark:text-white">/</span>
                                    {`UX`}
                                </p>
                                <h3 className="text-2xl font-bold pb-2">UI/UX Designer</h3>
                                <p>
                                    Have studied with <span className="font-bold">Figma</span>. For over 1 year of experience, also has social media that uploaded <span className="font-bold">UI/UX Design</span> content for personal purpose.
                                </p>
                            </SkillCard>
                            <SkillCard>
                                <i className="bx bx-globe h-32 flex items-center justify-center text-6xl xl:text-8xl text-yellow-400 pb-5" />
                                <h3 className="text-2xl font-bold pb-2">Networking</h3>
                                <p>
                                    Have studied with <span className="font-bold">Cisco</span> & <span className="font-bold">Mikrotik</span> and have more than 2 years experience. Not focus on this skill but more on the understanding for personal purpose.
                                </p>
                            </SkillCard>
                        </div>
                    </div>
                </div>
                <div id="projects" className="px-5 md:px-10 py-16 h-fit">
                    <div className="-ml-10 w-fit pb-5">
                        <div className="flex pl-10 bg bg-slate-300 dark:bg-slate-800 p-1 rounded-r-md">
                            <div className="rounded-md bg-slate-200 dark:bg-slate-700 py-1 px-3 text-slate-400 font-bold">
                                <span className="text-yellow-400 pr-3">../</span>
                                projects
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl pb-12 text-center">
                        Some of
                        <br />
                        <span className="font-bold text-yellow-400">My Project</span>
                    </h1>
                    <div className="container grid grid-rows-6 grid-cols-1 xl:grid-rows-2 xl:grid-cols-3 gap-6">
                        <Display imgUrl="/project-1.png" />
                        <Display imgUrl="/project-2.png" />
                        <Display imgUrl="/project-3.png" />
                        <Display imgUrl="/project-4.png" />
                        <Display imgUrl="/project-5.png" />
                        <Display imgUrl="/project-6.png" />
                    </div>
                </div>
            </div>
            <div id="contact" className="relative px-5 md:px-10 py-16 h-fit dark:text-white">
                <div className="absolute w-full h-full top-0 left-0 z-[-1] backdrop-blur-md bg-slate-600 dark:bg-slate-800 dark:text-white bg-blend-soft-light bg-opacity-80 dark:bg-blend-soft-light dark:bg-opacity-80"></div>
                {backgroundBlur()}
                <div className="-ml-10 w-fit pb-5">
                    <div className="flex pl-10 bg bg-slate-300 dark:bg-slate-900 p-1 rounded-r-md">
                        <div className="rounded-md bg-slate-200 dark:bg-slate-800 py-1 px-3 text-slate-400 font-bold">
                            <span className="text-yellow-400 pr-3">../</span>
                            contact
                        </div>
                    </div>
                </div>
                <h1 className="text-white text-4xl md:text-5xl pb-12 text-center">
                    Interested in me?
                    <br />
                    <span className="font-bold text-yellow-400">Just Contact me</span>
                </h1>
                <div className="container">
                    <div className="w-full md:w-3/4 h-fit m-auto p-5 bg-white dark:bg-darkb rounded-md text-slate-400">
                        <Form />
                    </div>
                </div>
            </div>
            <footer id="footer" className="px-5 md:px-10 py-10 h-fit bg-white dark:bg-darkb dark:text-white">
                <div className="container">
                    <div className="flex justify-between py-2">
                        <div className="w-full text-center">
                            <p>
                                © {new Date().getFullYear()} All Rights Reserved By{" "}
                                <Link href={"https://www.instagram.com/bobogeng.ui/"}>
                                    <a className="font-bold" target="_blank" rel="noopener noreferrer">
                                        Bobogeng
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[18rem] flex text-3xl text-slate-400 mx-auto">
                        <Link href={"https://www.youtube.com/channel/UCw2wRI6MUlyW1T32g8RZ-fg"}>
                            <a className="flex items-center m-auto p-2 hover:text-slate-500 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-youtube" />
                            </a>
                        </Link>
                        <Link href={"https://github.com/Bobogeng"}>
                            <a className="flex items-center m-auto p-2 hover:text-slate-500 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-github" />
                            </a>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/irsal-fathi-farhat-30296921b/"}>
                            <a className="flex items-center m-auto p-2 hover:text-slate-500 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-linkedin" />
                            </a>
                        </Link>
                        <Link href={"https://www.instagram.com/irsal_f.f/"}>
                            <a className="flex items-center m-auto p-2 hover:text-slate-500 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-instagram-alt" />
                            </a>
                        </Link>
                        <Link href={"https://www.facebook.com/irsal.ff/"}>
                            <a className="flex items-center m-auto p-2 hover:text-slate-500 active:text-yellow-400" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-facebook" />
                            </a>
                        </Link>
                    </div>
                    <p className="text-center"></p>
                </div>
            </footer>
        </Layout>
    );
}
