export interface IUserData {
    name?: string;
    email: string;
    password: string;
}


export interface IUserService {
    createUser(data: IUserData): Promise<Boolean | Error>;
}

export interface IUserRepository {
    create(name: string, email: string, hashedPassword: string): Promise<void>;
    findByEmail(email: string): Promise <Object | null>;
}
