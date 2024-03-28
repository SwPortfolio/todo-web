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
import { signinAPI } from '@/_https/api/auth'

//
interface isValuesProps {
    email: string
    password: string
}

//
export default function MemberSignIn() {
    const router: NextRouter = useRouter()
    const textRef = useRef<HTMLTextAreaElement | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [isValues, setIsValues] = useState<isValuesProps>({
        email: 'qwe@qwe.com',
        password: '1234',
    })
    //
    /// 제출하기
    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // 회원가입 요청
        try {
            const res = await signinAPI({
                email: isValues.email,
                password: isValues.password,
            });

            setIsLoading(false)
            console.log('res : ', res.data);
            if (res.data.resCode === '0000') {
                await router.replace({ query: { results: true, message: res.data.message.kor } })
            } else {
                await router.replace({ query: { results: false, message: res.data.message.kor } })
            }
        } catch (err) {
            setIsLoading(false)
            await router.replace({ query: { results: false } })
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
                        제출
                    </Button>
                </V.Form>
            </V.Column>
        </>
    )
}
