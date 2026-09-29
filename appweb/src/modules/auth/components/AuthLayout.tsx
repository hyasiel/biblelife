import type { ReactNode } from "react";

import AuthAside from "./AuthAside";

interface IAuthLayout {
    badge: string;
    title: ReactNode;
    description: ReactNode;
    children: ReactNode;
}

export default function AuthLayout ({badge, title, description, children}: IAuthLayout) {

    return (
        <main className="h-screen w-screen flex flex-col items-center justify-center bg-white md:flex-row">

            <AuthAside
                badge={badge}
                title={title}
                description={description}
            />

            {children}

        </main>
    )
}
