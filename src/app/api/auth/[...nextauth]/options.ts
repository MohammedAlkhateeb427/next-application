import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { GithubProfile } from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { GoogleProfile } from 'next-auth/providers/google';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          role: profile.role ?? 'user',
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'NEXT.js',
      credentials: {
        username: {
          label: 'UserName:',
          type: 'text',
          placeholder: 'Enter username',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Enter password',
        },
      },
      async authorize(credentials) {
        const user = {
          id: '42',
          name: 'Mohammed',
          password: 'nextauth',
          role: 'admin',
        };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    //if you want use the role in client componen
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  // secret: process.env.NEXTAUTH_SECRET,
};
