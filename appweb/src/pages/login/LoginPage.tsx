import {Link} from "react-router-dom"
import bg from "./../../modules/login/assets/loginbg.svg"
export default function LoginPage() {
    return (
        <>
        <main className="h-screen w-screen flex items-center justify-center bg-white">
            <div className="login w-5/6 h-4/5 rounded-3xl shadow-2xl shadow-blue-200 bg-gray-100">
                <form className="flex flex-col text-center h-full justify-around">

                    <div className="infoLogin flex flex-col gap-1.5">
                        <span className="text-2xl">Accede a tu cuenta</span>
                        
                        <span className="text-sm">y continúa tu progreso</span>
                        
                    
                    </div>
                    
                    <div className="inputs_container flex flex-col gap-4 items-center">

                        <span className="font-semibold self-baseline ml-6">Correo Electronico</span>

                        <input type="email" name="email" autoComplete="email" placeholder="example@domain.exp" className="border-b border-gray-300 w-4/5 h-10 focus:outline-none focus:placeholder-transparent focus:border-b-gray-400"/>

                        <span className="font-semibold self-baseline ml-6">Contraseña</span> 
                    
                        <input type="password" name="password" placeholder="type your password" className="border-b border-gray-300 w-4/5 h-10 focus:outline-none focus:placeholder-transparent focus:border-b-gray-400"/>
                        
                        <input type="submit" value="Iniciar Sesion" className="bg-blue-200 w-6/7 h-10 rounded-2xl hover:cursor-pointer"/>
                        
                        <Link to="" className="text-blue-800 font-light">¿No tienes una cuenta?</Link>

                    </div>
                    
                </form>
            </div>
        </main>
        </>
    )
}