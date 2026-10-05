interface ICreateUser {
    name?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
}

interface IUserService {
    createUser(data: ICreateUser): Promise<void>
}


export default class UserServices implements IUserService {
    async createUser (data: ICreateUser) {
        const {name, email, password, passwordConfirm} = data;

        

    }
}