import React from "react";

export default function SkillCard(props) {
    return (
        <div className="w-full sm:w-3/4 xl:w-full h-full m-auto p-3 bg-slate-200 dark:bg-slate-800 rounded-md">
            <div className="flex flex-col bg-white dark:bg-slate-700 p-5 w-full h-full rounded-md items-center">{props.children}</div>
        </div>
    );
}
