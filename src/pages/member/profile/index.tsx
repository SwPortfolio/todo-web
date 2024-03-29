//libs
import { V, Spacing, Dialog } from '@/_ui'
import { screenSize } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import Comp1 from '@/libs/components/home/Top'
import Comp2 from '@/libs/components/home/Comp2'
import ProjectList from '@/libs/components/home/ProjectList'
import Comp4 from '@/libs/components/home/Comp4'
import Comp5 from '@/libs/components/home/Comp5'
import React, { useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { getMemberAPI } from '@/_https/api/member'

//

interface memberProps {
  memberId: string
  email: string
  nickname: string
  regDate: string
}

export default function Index() {
  const router: NextRouter = useRouter()

  const [isOpen, setIsOpen] = useState<boolean | 'dialog' | 'bottomSheet' | 'calenderModal'>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMember, setMember] = useState<memberProps>({
    memberId: '',
    email: '',
    nickname: '',
    regDate: '',
  })

  const handelGetProfile = async () => {
    try {
      setIsLoading(true);

      const res = await getMemberAPI();
      console.log('회원정보 조회 api 응답 : ', res.data);
      setIsLoading(false);
      if (res.data.resCode === '0000') {
        const resData = res.data.body.member;
        setMember({
          memberId: resData.memberId,
          email: resData.email,
          nickname: resData.nickname,
          regDate: resData.regDate
        })
        // await router.replace('/');
      } else {

      }
    } catch (err) {
      setIsLoading(false);
      setIsOpen('dialog');
    }
  }

  useEffect(() => {
    // 회원정보 조회
    handelGetProfile();
  }, [])

  return (
    <>
      <SEO />

      <V.Section>
        <V.Container maxWidth={screenSize[3]} padding={{ top: 20, bottom: 40, horizontal: 20 }}>
          <Spacing size={16} />
          닉네임 : { isMember.nickname }
        </V.Container>
      </V.Section>

      <Dialog
        open={isOpen === 'dialog'}
        onCancel={() => {
          setIsOpen(false)
          router.replace('/');
        }}
        title=""
        description={'로그인후 이용가능합니다.'}
        // tabs={[{ name: '닫기' }]}
      />
    </>
  )
}
