import {IconNotebook, IconHeart} from '@tabler/icons-react';

export default function Welcome () {
    return (
        <section className="welcome_section pr-2.5 pl-2.5 relative flex md:items-center">
                <time dateTime="2026-08-24" className='visible md:hidden'>ago 24, 2026</time>
                <h2 className="welcome_text md:pt-2.5 text-2xl mt-1 mb-2 md:text-xl">Bienvenido</h2>
                <div className="actions visible md:hidden flex gap-3">
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