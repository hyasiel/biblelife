import type {ReactNode} from "react";

import { IconBook2, IconSunrise, IconHeart, IconUserCircle } from "@tabler/icons-react";

import bg from "../../login/assets/loginbg.jpg";
import "../styles/main.css";

const features = [
    {
        icon: IconBook2,
        title: "Lectura por libros y capítulos",
        text: "Recorre el Antiguo y el Nuevo Testamento, salta al capítulo que quieras y cambia de versión sin interrumpir tu lectura."
    },
    {
        icon: IconSunrise,
        title: "Versículo del día",
        text: "Cada jornada comienza con un pasaje seleccionado, pensado para ser tu primer momento de reflexión."
    },
    {
        icon: IconHeart,
        title: "Favoritos y guardados",
        text: "Marca los versículos que quieres volver a leer y tenlos a mano, separados de lo demás."
    },
    {
        icon: IconUserCircle,
        title: "Tu cuenta, tu progreso",
        text: "Inicia sesión para conservar tu progreso y retomarlo cuando quieras, estés donde estés."
    }
];

interface IAuthAside {
    badge: string;
    title: ReactNode;
    description: ReactNode;
}

export default function AuthAside ({badge, title, description}: IAuthAside) {

    return (
        <section className="pre-form flex-1 hidden md:flex bg-cover bg-center h-dvh" style={{backgroundImage: `url(${bg})`}}>

            <div className="pre_login_info flex h-full w-full max-w-2xl flex-col self-center overflow-y-auto px-10 py-12 text-gray-900 lg:px-16">

                <div className="m-auto flex w-full flex-col gap-10">

                    <div className="flex flex-col gap-4">

                        <span className="w-fit rounded-full bg-blue-100/80 px-3.5 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-blue-800">
                            {badge}
                        </span>

                        <h1 className="text-2xl font-bold leading-tight lg:text-3xl">
                            {title}
                        </h1>

                        <p className="max-w-lg text-sm leading-relaxed text-gray-700">
                            {description}
                        </p>

                    </div>

                    <ul className="project_features flex flex-col gap-5">

                        {features.map(({icon: Icon, title, text}) => (
                            <li key={title} className="flex items-start gap-4">

                                <span className="feature_icon flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-blue-800 shadow-custom">
                                    <Icon stroke={1.5} className="size-5" aria-hidden/>
                                </span>

                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold">{title}</span>
                                    <span className="text-sm text-gray-700">{text}</span>
                                </div>

                            </li>
                        ))}

                    </ul>

                    <div className="flex flex-col gap-3 border-t border-gray-900/10 pt-6">

                        <span className="text-xs italic text-gray-600">
                            Biblelife es software libre y está en constante crecimiento.
                        </span>

                    </div>

                </div>

            </div>
        </section>
    )
}
