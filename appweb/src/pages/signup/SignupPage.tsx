import AuthLayout from "../../modules/auth/components/AuthLayout"
import AuthCard from "../../modules/auth/components/AuthCard"
import FormField from "../../modules/auth/components/FormField"

import { IconUserPlus, IconUser, IconMail, IconLockPassword, IconLockCheck } from '@tabler/icons-react';


export default function SignupPage() {
    return (
        <AuthLayout
            badge="Crea tu cuenta gratis"
            title={<>Empieza a leer
                    <br />
                    sin interrupciones</>}
            description={<>Crea tu cuenta y guarda tus favoritos, tu progreso y los pasajes que quieres
                volver a leer. <strong className="font-semibold text-gray-900">Biblelife</strong> te acompaña
                en cada dispositivo, para que retomes tu lectura justo donde la dejaste.</>}
        >

            <AuthCard
                title="Crea tu cuenta"
                subtitle="y empieza a leer hoy mismo"
                icon={IconUserPlus}
                submitLabel="Crear Cuenta"
                linkTo="/login"
                linkLabel="¿Ya tienes una cuenta?"
            >

                <FormField label="Nombre" icon={IconUser} type="text" name="nombre" autoComplete="name" required placeholder="tu nombre"/>

                <FormField label="Correo Electronico" icon={IconMail} type="email" name="email" autoComplete="email" required placeholder="example@domain.exp"/>

                <FormField label="Contraseña" icon={IconLockPassword} type="password" name="password" autoComplete="new-password" required minLength={8} placeholder="mínimo 8 caracteres"/>

                <FormField label="Repite la contraseña" icon={IconLockCheck} type="password" name="passwordConfirm" autoComplete="new-password" required minLength={8} placeholder="vuelve a escribirla"/>

            </AuthCard>

        </AuthLayout>
    )
}
