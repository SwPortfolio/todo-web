import { NextRouter, useRouter } from 'next/router'

//libs
import { Button, V, Spacing, Txt } from '@/_ui'
import { colors } from '@/libs/themes'
import { useJenga } from '@/_ui/JengaProvider'

//
export default function Comp5() {
    const router: NextRouter = useRouter()

    const { addToast } = useJenga()

    return (
        <>
            <V.Container>
                <Txt as="h2" size={18}>
                    {'TODO 기능을\n빠르게 만들고 싶을땐?'}
                </Txt>

                <Spacing size={8} />

                <Txt color={colors.grey200}>{'시작해보세요.'}</Txt>

                <Spacing size={18} />

                <V.Row gap={10}>
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

                    {/*<Button*/}
                    {/*    variant="stroke"*/}
                    {/*    as="m"*/}
                    {/*    onClick={() =>*/}
                    {/*        addToast({*/}
                    {/*            status: 'success',*/}
                    {/*            title: 'Jenga UI Toast',*/}
                    {/*            description: 'useToast를 통해 사용해보세요',*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    Jenga Toast*/}
                    {/*</Button>*/}
                </V.Row>
            </V.Container>
        </>
    )
}
