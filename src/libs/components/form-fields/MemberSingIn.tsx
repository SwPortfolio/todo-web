import React, { useRef, useState, ChangeEvent, FormEvent } from 'react'
import { useRouter, NextRouter } from 'next/router'

//libs
import { V, Input, Option, Select, Button, AvatarUploader, LoadingLayer } from '@/_ui'

//utils
import { regEx } from '@/libs/utils/regEx'

//components
import CheckBoxs from './CheckBoxs'
import CheckModals from './CheckModals'
import { awaitExpression } from '@babel/types'

// api
import { signinAPI } from '@/_https/api/auth'

//
interface isValuesProps {
    email: string
    password: string
}

//
export default function MemberSignIn() {
    const router: NextRouter = useRouter()
    // const textRef = useRef<HTMLTextAreaElement | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [isValues, setIsValues] = useState<isValuesProps>({
        email: '',
        password: '',
    })
    //
    /// 제출하기
    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            const res = await signinAPI({
                email: isValues.email,
                password: isValues.password,
            });

            setIsLoading(false);
            if (res.data.resCode === '0000') {
                const resData = res.data.body;
                console.log(resData);
                localStorage.setItem('accessToken', resData.token);
                localStorage.setItem('memberId', resData.memberId);
                localStorage.setItem('email', resData.email);
                localStorage.setItem('nickname', resData.nickname);
                await router.replace('/');
            } else {

            }
        } catch (err) {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && <LoadingLayer />}

            <V.Column gap={30}>
                <V.Form gap={22} onSubmit={handleOnSubmit} align="center">

                    <Input label="이메일" labelEdge="(필수)">
                        <Input.TextField
                            placeholder="이메일을 입력하세요"
                            type="eamil"
                            name="name"
                            value={isValues.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setIsValues({ ...isValues, email: e.target.value })
                            }
                            error={!!isValues.email && !regEx.email.test(isValues.email)}
                            errorMessage="이메일 형식으로 입력하세요"
                        />
                    </Input>

                    <Input label="비밀번호" labelEdge="(필수)">
                        <Input.TextField
                            placeholder="비밀번호를 입력하세요"
                            type="password"
                            name="name"
                            value={isValues.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setIsValues({ ...isValues, password: e.target.value })
                            }
                            // error={!!isValues.email && !regEx.email.test(isValues.email)}
                            // errorMessage="이메일 형식으로 입력하세요"
                        />
                    </Input>

                    <Button
                        width="100%"
                        maxWidth={520}
                        type="submit"
                        disabled={
                            !(
                                isValues.email &&
                                isValues.password
                            )
                        }
                    >
                        로그인
                    </Button>
                </V.Form>
            </V.Column>
        </>
    )
}
