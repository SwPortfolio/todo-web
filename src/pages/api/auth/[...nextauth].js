import NextAuth from 'next-auth/next'
// import Providers from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import { NextApiRequest } from 'next'
import axios from 'axios'
import { signinAPI } from '@/_https/api/auth';

export default NextAuth({
    providers: [
        CredentialsProvider({
            // 1. 로그인 페이지 폼 자동 생성
            name: 'credentials',
            // 이 부분은 자체 로그인 로직을 구현합니다.
            credentials: {
                email: { label: '이메일', type: 'email', placeholder: '이메일 주소 입력' },
                password: { label: '비밀번호', type: 'password' },
            },
            async authorize(credentials, req) {
                console.log('로그인 해줘');
                if (!credentials)
                    throw new Error("잘못된 입력값으로 인한 오류가 발생했습니다.");

                // 외부 서버와 통신하여 유저 정보와 토큰을 가져오는 로직을 여기에 구현합니다.
                const { email, password } = credentials;

                // 외부 서버와의 통신을 통해 유저 정보와 토큰을 가져옵니다.
                const response = await signinAPI({
                    email,
                    password
                });
                console.log(response.data);
                const data = response.data;

                if (data.resCode === '0000') {
                    // 유저 정보와 토큰을 NextAuth.js 세션에 저장합니다.
                    console.log('login res data : ', data);
                    return {
                        token: data.token,
                        memberId: data.memberId,
                        email: data.email,
                        nickname: data.nickname
                    };
                } else {
                    // 로그인 실패 시 null을 반환합니다.
                    return null;
                }
            }
        })
        // GoogleProvider({
        //   clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        //   clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        // }),
        // KakaoProvider({
        //   clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
        //   clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
        // }),
    ],
    callbacks: {
        async session(session, token) {
            // 세션에 토큰 정보를 추가합니다.
            session.token = token.token;
            return session;
        },
        // async signIn({ account, profile, email, user }) {
        //     console.log('account : ', account);
        //     if (account.provider === 'google') {
        //         return profile.email_verified
        //     }
        //
        //     return true
        // },
    },
    session: {
        jwt: true
    },

    // pages: {
    //     signIn: '/signin',
    // },

    secret: process.env.NEXTAUTH_SECRET,
})
