//libs
import { V, Spacing } from '@/_ui'
import { screenSize } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import Top from '@/libs/components/home/Top'
import Comp2 from '@/libs/components/home/Comp2'
import Comp3 from '@/libs/components/home/Comp3'
import Comp4 from '@/libs/components/home/Comp4'
import Comp5 from '@/libs/components/home/Comp5'

import { NextRouter, useRouter } from 'next/router'

//
export default function Index() {
  const router: NextRouter = useRouter();

  return (
    <>
      <SEO />

      <V.Section>
        <V.Container maxWidth={screenSize[3]} padding={{ top: 20, bottom: 40, horizontal: 20 }}>
          <Spacing size={16} />
          <Top />
          {/*<Spacing size={44} />*/}
          {/*{*/}
          {/*  isLogin ? <></> : <Comp5/>*/}
          {/*}*/}
          <Spacing size={12} />
          <Comp2 />
          <Spacing size={54} />
          <Comp3 />
          <Spacing size={44} />
          <Comp4 />
        </V.Container>
      </V.Section>
    </>
  )
}
