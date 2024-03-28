import { NextRouter, useRouter } from 'next/router'

//libs
import { V, Spacing, Txt } from '@/_ui'
import { MQ, colors } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import MemberSignUp from '@/libs/components/form-fields/MemberSignUp'
import Result from '@/libs/components/form-fields/Result'

//
export default function SignUp() {
    const router: NextRouter = useRouter()

    return (
        <>
            <SEO title="회원가입" description="Form 개발할때 다양한 인풋들을 사용해보세요!" />

            <V.Section>
                <V.Container
                    maxWidth={560}
                    padding={{ top: 40, bottom: 20, horizontal: 20 }}
                    css={{ [MQ[3]]: { paddingTop: 16, paddingBottom: 0 } }}
                >
                    <Txt as="h1" size={24}>
                        회원가입
                    </Txt>

                    <Spacing size={14} />

                    <Txt color={colors.red}>
                        {router.query.results === 'false' ? router.query.message : ''}
                    </Txt>

                    <Spacing size={30} />
                    {router.query.results === 'true' ? <Result /> : <MemberSignUp />}
                </V.Container>
            </V.Section>
        </>
    )
}
