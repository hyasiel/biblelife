import {signUpService, loginService} from "../services/authService";

interface ICredentials {
    name?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

export default function useAuth () {
    
    
    const Signup = (credentials: ICredentials) => {
        signUpService(credentials);
    }

    const Login = (credentials: ICredentials) => {
        loginService(credentials)
    }


    return {Signup, Login};

}