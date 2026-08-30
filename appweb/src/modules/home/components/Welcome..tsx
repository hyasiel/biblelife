import {IconNotebook, IconHeart} from '@tabler/icons-react';

export default function Welcome () {
    return (
        <section className="welcome_section pr-2.5 pl-2.5">
                <time dateTime="2026-08-24">ago 24, 2026</time>
                <h2 className="welcome_text">Bienvenido</h2>
                <div className="actions">
                    <button aria-label="Accion 1">
                        <IconNotebook stroke={2} />
                    </button>
                    <button aria-label="Accion 2">
                        <IconHeart stroke={2}/>
                    </button>
                </div>
                </section>
    )
}