//libs
import { Avatar } from 'react-image-cached-resizer'
import { Button, Txt, V } from '@/_ui'
import { colors } from '@/libs/themes'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { loginCheckAPI } from '@/_https/api/auth'
import { ca } from 'date-fns/locale'

//
export default function Top() {
    const router: NextRouter = useRouter()

    const [isLogin, setLogin] = useState<boolean>(false)

    const handelLoginCheck = async () => {
        try {
            const res = await loginCheckAPI();
            setLogin(true);
        } catch (err)  {
            setLogin(false);
        }
    }

    const handelLogOut = async () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('nickname');
        localStorage.removeItem('email');
        localStorage.removeItem('memberId');
        router.reload();
    }

    useEffect(() => {
        // token 로그인여부 체크
        console.log('로그인 여부 체크')
        handelLoginCheck();
    }, [])

    return (
        <V.Container
            padding={{ all: 14 }}
            shadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1)' }}
            borderRadius={16}
        >
            <V.Row gap={12} align="center">
                <Avatar
                    source="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public"
                    alt="템플릿"
                    size={40}
                />
                <V.Column gap={3}>
                    <Txt as="strong" size={17}>
                        TODO
                    </Txt>
                    <Txt size={13} color={colors.grey200}>
                        {isLogin ? `${localStorage.getItem('nickname')}님` : ''} 일정을 관리해요 🥰
                    </Txt>
                </V.Column>
                {
                    !isLogin ?
                      <>
                          <Button
                            as="m"
                            onClick={() => router.push({
                                pathname: '/member/sign-up',
                                query: { results: false }
                            })}
                            txtColor="#fff"
                            buttonColor={colors.keyColor}
                          >
                              회원가입
                          </Button>

                          <Button
                            as="m"
                            onClick={() => router.push('/member/sign-in')}
                            txtColor="#fff"
                            buttonColor={colors.keyColor}
                          >
                              로그인
                          </Button>
                      </> :  <Button
                        as="m"
                        onClick={() => handelLogOut()}
                        txtColor="#fff"
                        buttonColor={colors.keyColor}
                      >
                          로그아웃
                      </Button>
                }
            </V.Row>
        </V.Container>
    )
}
