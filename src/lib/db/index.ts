import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/http";
import * as schema from "./schema";

interface Env {
    TURSO_DB_AUTH_TOKEN?: string;
    TURSO_DB_URL?: string;
}

const client = createClient({
    url: process.env["TURSO_DB_URL"] as string,
    authToken: process.env["TURSO_DB_AUTH_TOKEN"] as string,
});

export const db = drizzle(client);
