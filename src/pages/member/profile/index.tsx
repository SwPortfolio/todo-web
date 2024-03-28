//libs
import { V, Spacing } from '@/_ui'
import { screenSize } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import Comp1 from '@/libs/components/home/Comp1'
import Comp2 from '@/libs/components/home/Comp2'
import Comp3 from '@/libs/components/home/Comp3'
import Comp4 from '@/libs/components/home/Comp4'
import Comp5 from '@/libs/components/home/Comp5'

//
export default function Index() {
  return (
    <>
      <SEO />

      <V.Section>
        <V.Container maxWidth={screenSize[3]} padding={{ top: 20, bottom: 40, horizontal: 20 }}>
          <Spacing size={16} />
          Profile Page
        </V.Container>
      </V.Section>
    </>
  )
}
