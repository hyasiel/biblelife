const API_URL = import.meta.env.VITE_API_URL;

interface ICredentials {
    name?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

export async function signUpService(credentials: ICredentials) {
    const {name, email, password, passwordConfirm} = credentials;

        fetch(`${API_URL}/u/create`, { 
            headers: {"Content-Type": "Application/json"},
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            })
        })
}


export async function loginService(credentials: ICredentials) {
    const {email, password} = credentials;

        fetch(`${API_URL}/login_user`, { 
            headers: {"Content-Type": "Application/json"},
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
}