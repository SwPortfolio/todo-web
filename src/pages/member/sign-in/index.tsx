import { NextRouter, useRouter } from 'next/router'

//libs
import { V, Spacing, Txt } from '@/_ui'
import { MQ, colors } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import MemberSignIn from '@/libs/components/form-fields/MemberSingIn'
import Result from '@/libs/components/form-fields/Result'

import { useSession, signIn, signOut } from 'next-auth/react'
import { FormEvent } from 'react'
import Link from 'next/link'

//
export default function SignIn() {
  const router: NextRouter = useRouter();
  // const session = useSession();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {

    await signIn("credentials", {
      email: 'qwe@qwe.com',
      password: '1234',
      redirect: false,
    }).then((result) => {
      if (result?.ok)
          router.push('/')
    });
  }

  return (
    <div className={'space-x-10'}>
      <form onSubmit={onSubmit}>
        <button className='rounded-xl border bg-yellow-300 px-12 py-4' type={'submit'}>Sign in</button>
      </form>
      <Link
        href='/member/sign-up'
      >회원가입</Link>
    </div>
  )
  // if (session) {
  //     return (
  //         <>
  //             Signed in as {session.user.email} <br/>
  //             <button onClick={() => signOut()}>Sign out</button>
  //         </>
  //     )
  // }
  // return (
  //     <>
  //         not signed in <br/>
  //         <button onClick={() => signIn()}>Sign in</button>
  //     </>
  // )

  // return (
  //     <>
  //         <SEO title="로그인" description="Form 개발할때 다양한 인풋들을 사용해보세요!" />
  //
  //         <V.Section>
  //             <V.Container
  //                 maxWidth={560}
  //                 padding={{ top: 40, bottom: 20, horizontal: 20 }}
  //                 css={{ [MQ[3]]: { paddingTop: 16, paddingBottom: 0 } }}
  //             >
  //                 <Txt as="h1" size={24}>
  //                     {router.query.results === 'true'
  //                         ? `로그인 성공`
  //                         : `로그인 실패`}
  //                 </Txt>
  //
  //                 <Spacing size={14} />
  //
  //                 <Txt color={colors.grey200}>
  //                     {router.query.results === 'true'
  //                         ? `빠르게 트랜디한 UI를 만들어보세요\n당신의 개발 효율이 압도적으로 오를 거에요`
  //                         : router.query.message}
  //                 </Txt>
  //
  //                 <Spacing size={30} />
  //
  //                 {router.query.results === 'true' ? <Result /> : <MemberSignIn />}
  //             </V.Container>
  //         </V.Section>
  //     </>
  // )
}
