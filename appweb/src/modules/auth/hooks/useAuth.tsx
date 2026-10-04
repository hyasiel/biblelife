interface ICredentials {
    name?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

export default function useAuth () {
    
    
    const Signup = async (credentials: ICredentials) => {
            
        const {name, email, password, passwordConfirm} = credentials;

        fetch("/u/create", { 
            headers: {"Content-Type": "Application/json"},
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            })
        })
        console.log("signup")
        return true;

    
    }

    const Login = async (credentials: ICredentials) => {
        
        const {email, password} = credentials;

        fetch("/login_user", { 
            headers: {"Content-Type": "Application/json"},
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        console.log("login")
        return true;
    }


    return {Signup, Login};

}