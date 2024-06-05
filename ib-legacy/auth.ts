import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { config } from 'dotenv';
// import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';

 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials): Promise<User | null>{
        const parsedCredentials = z
            .object({ username: z.string(), password: z.string().min(6) })
            .safeParse(credentials);

        if (parsedCredentials.success) {
            const { username, password } = parsedCredentials.data;
            // Load environment variables from .env file
            config();

            // Get the user and password from the environment variables
            const user = process.env.USER;
            const pwd = process.env.PASSWORD;

            // Check if the provided credentials match the user and password from the environment variables
            if (username === user && password === pwd) {
                // Authentication successful
                return { username };
            } else {
                // Authentication failed
                return null;
            }
        }
        return null;
      },
    }),
  ],
});