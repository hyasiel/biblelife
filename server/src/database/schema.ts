import {
    mysqlTable,
    int,
    varchar,
    check
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable(
    "users",
    {
        userId: int("user_id")
            .primaryKey()
            .autoincrement(),

        username: varchar("username", {
            length: 15
        }).notNull().unique(),

        email: varchar("email", {
            length: 60
        }),

        countryCode: varchar("country_code", {
            length: 5
        }),

        phoneNumber: varchar("phone_number", {
            length: 20
        }),

        passwordHash: varchar("password_hash", {
            length: 255
        }).notNull()
    },
    (table) => [
        check(
            "contact_required",
            sql`(
                (${table.email} IS NOT NULL AND ${table.email} <> '')
                OR
                (
                    ${table.phoneNumber} IS NOT NULL
                    AND ${table.phoneNumber} <> ''
                    AND ${table.countryCode} IS NOT NULL
                    AND ${table.countryCode} <> ''
                )
            )`
        )
    ]
);