import type {IUserRepository} from "./users.types.ts";
import {db} from "./../../database/connection.ts";
import {eq} from "drizzle-orm";
import {users} from "./../../database/schema.ts"
export class UserRepository implements IUserRepository {
    async create(name: string, email: string, hashedPassword: string) {

        const result = await db.insert(users).values({username: name, email: email, countryCode: null, phoneNumber: null, passwordHash: hashedPassword})

        console.log("usuario creado: " + result[0])
    }

    async findByEmail(email: string): Promise<Object | null> {
        const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
        

        return result[0] ?? null;
    }

}
