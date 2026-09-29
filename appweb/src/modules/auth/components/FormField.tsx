import type { ComponentProps } from "react";
import type { Icon } from "@tabler/icons-react";

const inputClass = "border-b border-gray-300 focus:outline-none focus:placeholder-transparent focus:border-b-gray-400 w-full";

interface IFormField {
    label: string;
    icon: Icon;
}

export default function FormField ({label, icon: IconComponent, ...inputProps}: IFormField & ComponentProps<"input">) {

    return (
        <>
            <span className="font-semibold self-baseline ml-6 lg:ml-12">{label}</span>

            <div className="w-4/5 h-10 flex items-center gap-1.5">

                <IconComponent stroke={2} className="size-7.5" aria-hidden/>

                <input className={inputClass} {...inputProps}/>

            </div>
        </>
    )
}
