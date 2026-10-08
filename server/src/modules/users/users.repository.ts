import type {IUserRepository} from "./users.types.ts";

export class UserRepository implements IUserRepository {
    async create(name: string, email: string, hashedPassword: string) {

        
        console.log("desde repository: " + name)
    }

    async findByEmail(email: string): Promise<Object | null> {

    }

}
