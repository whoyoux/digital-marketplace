import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import type { NextAuthConfig } from "next-auth";
import { db } from "./db";

export const config = {
    providers: [
        Discord({
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    adapter: DrizzleAdapter(db),
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
