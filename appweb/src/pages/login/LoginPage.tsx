import AuthLayout from "../../modules/auth/components/AuthLayout"
import AuthCard from "../../modules/auth/components/AuthCard"
import FormField from "../../modules/auth/components/FormField"

import { IconUserCircle, IconMail, IconLockPassword } from '@tabler/icons-react';


export default function LoginPage() {
    return (
        <AuthLayout
            badge="Proyecto personal de código abierto"
            title={<>La Palabra de Dios,
                    <br />
                    siempre a mano</>}
            description={<><strong className="font-semibold text-gray-900">Biblelife</strong> nació de una idea sencilla:
                leer la Biblia con calma, sin anuncios y sin ruido. Elige tu versión, recorre libro a libro
                y guarda los pasajes que importan, para que tu lectura continue exactamente donde la dejaste.</>}
        >

            <AuthCard
                title="Accede a tu cuenta"
                subtitle="y continúa tu progreso"
                icon={IconUserCircle}
                submitLabel="Iniciar Sesion"
                linkTo="/signup"
                linkLabel="¿No tienes una cuenta?"
            >

                <FormField label="Correo Electronico" icon={IconMail} type="email" name="email" autoComplete="email" placeholder="example@domain.exp"/>

                <FormField label="Contraseña" icon={IconLockPassword} type="password" name="password" placeholder="type your password " autoComplete="new-password"/>

            </AuthCard>

        </AuthLayout>
    )
}
