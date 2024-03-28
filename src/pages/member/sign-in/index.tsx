import { NextRouter, useRouter } from 'next/router'

//libs
import { V, Spacing, Txt, LoadingLayer, Input } from '@/_ui'
import { MQ, colors } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import MemberSignIn from '@/libs/components/form-fields/MemberSingIn'
import Result from '@/libs/components/form-fields/Result'

import React from 'react'

//
export default function SignIn() {
  const router: NextRouter = useRouter();

  return (
    <>
      <SEO title="로그인" description="Form 개발할때 다양한 인풋들을 사용해보세요!" />

      <V.Section>
        <V.Container
          maxWidth={560}
          padding={{ top: 40, bottom: 20, horizontal: 20 }}
          css={{ [MQ[3]]: { paddingTop: 16, paddingBottom: 0 } }}
        >
          <Txt as="h1" size={24}>
            로그인
          </Txt>

          <Spacing size={14} />

          <Txt color={colors.red}>
            {router.query.results === 'false' ? router.query.message : ''}
          </Txt>

          <Spacing size={30} />
          {router.query.results === 'true' ? <Result /> : <MemberSignIn />}
        </V.Container>
      </V.Section>
    </>
  )
}
