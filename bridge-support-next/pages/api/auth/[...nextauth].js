import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { CredentialsProvider } from 'next-auth/providers';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const isPasswordConfirmOk = (pw, pwConfirm) => {
  /**
   * 入力されたパスワードと確認用パスワードが同一であるか判定
   * param:pw string パスワード
   * param:pwConfirm string 確認用パスワード
   * return: true/false bool 
   */
  if (pw === pwConfirm) {
    return true
  }
  return false
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Sign in with Github account
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Sign in with Google account
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name:"サインイン",
      id:"credential",
      type:"credentials",
      credentials:{
        username: { label: "ユーザー名", type: "text", placeholder: "ユーザー名" },
        password: {  label: "パスワード", type: "password" },
        passwordConfirmation: {  label: "パスワード確認", type: "password" }
      },
      authorize (credentials, req) {
        const { username, password, passwordConfirmation } = credentials;
        let user;
        if (isPasswordConfirmOk(password, passwordConfirmation)) {
          user = {
            name: username,
            password: password
          }
        }
        if(user){
          return user
        }else{
          return null
        }
      }
    }),
  ],
});