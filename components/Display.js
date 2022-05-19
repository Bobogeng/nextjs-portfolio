import React from "react";
import Image from "next/image";

export default function Display(props) {
    return (
        <div className="relative w-full h-[12rem] sm:h-[24rem] md:h-[32rem] xl:h-[17rem] rounded-md overflow-hidden">
            <Image src={props.imgUrl} alt="Display" layout="fill" quality={100} />
        </div>
    );
}
