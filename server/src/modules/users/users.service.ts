import type {IUserData, IUserService} from "./users.types.ts"
import bcrypt from "bcrypt"
import { UserRepository } from "./users.repository.ts";

const repository = new UserRepository();

export default class UserServices implements IUserService {

    async createUser (data: IUserData) {
        const {name, email, password} = data;

        const userExist = await repository.findByEmail(email);
        
        if(userExist) throw new Error("User Exists");

        const hashedPassword = await bcrypt.hash(password, 12)

        await repository.create(name!, email, hashedPassword)

        return true;

    }
}