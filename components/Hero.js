import { useTheme } from "next-themes";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function Hero(props) {
    gsap.registerPlugin(ScrollTrigger);
    let landscape = useRef(null);
    let cloudLandscape = useRef(null);
    let cloud1 = useRef(null);
    let cloud2 = useRef(null);
    let cloud3 = useRef(null);
    let cloud4 = useRef(null);
    let crow = useRef(null);
    let person = useRef(null);
    let light = useRef(null);
    let timeline = gsap.timeline();

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        timeline
            .to(landscape.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 1.1,
            })
            .to(cloudLandscape.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 1.1,
                yPercent: -1,
                xPercent: 0,
            })
            .to(person.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 1.3,
            })
            .to(crow.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 0.5,
                yPercent: 5,
                xPercent: 10,
            })
            .to(cloud1.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 2,
                yPercent: -10,
                xPercent: 5,
            })
            .to(cloud2.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 2,
                yPercent: -10,
                xPercent: 5,
            })
            .to(cloud3.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 2,
                yPercent: -10,
                xPercent: 5,
            })
            .to(cloud4.current, {
                scrollTrigger: {
                    scrub: 1,
                },
                scale: 2,
                yPercent: -10,
                xPercent: 5,
            })
            .to(light.current, {
                scrollTrigger: {
                    trigger: light.current,
                    scrub: 1,
                },
                scale: 1.2,
                yPercent: 0,
                xPercent: 0,
                transformOrigin: "top right",
            });

        setMounted(true);
    }, [mounted, timeline]);

    const heroLandscape = () => {
        if (!mounted) return null;

        if (theme === "dark") {
            return (
                <div className="relative w-full h-full">
                    <div className="absolute top-0 -z-1 w-full h-screen mix-blend-soft-light bg-black bg-opacity-50"></div>
                    <div className="absolute top-0 -z-2 w-full h-screen mix-blend-screen" ref={light}>
                        <Image src="/pixel-art-landscape-night/Moon.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-3 w-full h-screen" ref={person}>
                        <Image src="/pixel-art-landscape-night/Person.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-4 w-full h-screen" ref={crow}>
                        <Image src="/pixel-art-landscape-night/Crow.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-5 w-full h-screen" ref={cloud4}>
                        <Image src="/pixel-art-landscape-night/Cloud-4.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-6 w-full h-screen" ref={cloud3}>
                        <Image src="/pixel-art-landscape-night/Cloud-3.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-7 w-full h-screen" ref={cloud2}>
                        <Image src="/pixel-art-landscape-night/Cloud-2.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-8 w-full h-screen" ref={cloud1}>
                        <Image src="/pixel-art-landscape-night/Cloud-1.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-9 w-full h-screen" ref={cloudLandscape}>
                        <Image src="/pixel-art-landscape-night/Cloud-Landscape.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-10 w-full h-screen" ref={landscape}>
                        <Image src="/pixel-art-landscape-night/Landscape.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="relative h-full">
                    <div className="absolute top-0 -z-1 w-full h-screen object-cover mix-blend-soft-light bg-[#898627] bg-opacity-50"></div>
                    <div className="absolute top-0 -z-2 w-full h-screen mix-blend-screen" ref={light}>
                        <Image src="/pixel-art-landscape/Sun.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-3 w-full h-screen" ref={person}>
                        <Image src="/pixel-art-landscape/Person.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-4 w-full h-screen" ref={crow}>
                        <Image src="/pixel-art-landscape/Crow.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-5 w-full h-screen" ref={cloud4}>
                        <Image src="/pixel-art-landscape/Cloud-4.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-6 w-full h-screen" ref={cloud3}>
                        <Image src="/pixel-art-landscape/Cloud-3.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-7 w-full h-screen" ref={cloud2}>
                        <Image src="/pixel-art-landscape/Cloud-2.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-8 w-full h-screen" ref={cloud1}>
                        <Image src="/pixel-art-landscape/Cloud-1.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-9 w-full h-screen" ref={cloudLandscape}>
                        <Image src="/pixel-art-landscape/Cloud-Landscape.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                    <div className="absolute top-0 -z-10 w-full h-screen" ref={landscape}>
                        <Image src="/pixel-art-landscape/Landscape.png" alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="relative z-[1] top-0 w-full h-screen overflow-hidden">
            {heroLandscape()}
            {props.children}
        </div>
    );
}
