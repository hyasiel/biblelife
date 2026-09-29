import { Link } from "react-router-dom";

import type { ReactNode } from "react";
import type { Icon } from "@tabler/icons-react";

interface IAuthCard {
    title: string;
    subtitle: string;
    icon: Icon;
    submitLabel: string;
    linkTo: string;
    linkLabel: string;
    children: ReactNode;
}

export default function AuthCard ({title, subtitle, icon: IconComponent, submitLabel, linkTo, linkLabel, children}: IAuthCard) {

    return (
        <div className="login min-w-2xs max-w-sm md:max-w-full w-5/6 h-4/5 md:h-full rounded-3xl md:rounded-none shadow-2xl shadow-blue-200 bg-gray-100 border md:border-0 md:shadow-none border-gray-400 relative md:flex-1">

            <form className="flex flex-col text-center h-full justify-around overflow-y-auto py-4 lg:pr-8 lg:pl-8">

                <div className="infoLogin flex flex-col gap-1.5 items-center">

                    <span className="text-xl relative -top-6 font-bold">BIBLELIFE</span>

                    <span className="text-2xl">{title}</span>

                    <span className="text-sm">{subtitle}</span>

                    <IconComponent stroke={1} className="size-17 relative -bottom-4"/>

                </div>

                <div className="inputs_container flex flex-col gap-4 items-center">

                    {children}

                    <input type="submit" value={submitLabel} className="bg-blue-200 w-6/7 h-10 rounded-2xl hover:cursor-pointer"/>

                    <Link to={linkTo} className="text-blue-800 font-light">{linkLabel}</Link>

                </div>

            </form>
        </div>
    )
}
