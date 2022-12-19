import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const { PrismaClient } = require('@prisma/client')
const prisma  = new PrismaClient();

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
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});