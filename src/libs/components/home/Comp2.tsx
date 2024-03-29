//libs
import { colors } from '@/libs/themes/colors'
import { Spacing, Txt, TxtSpan, V } from '@/_ui'
import { useEffect, useState } from 'react'
import { CalenderIcon } from '@/libs/assets/icons'

interface dutyProps {
    dutyName: string,
    memo: string,
    priority: number,
    deadline: string
}

//
export default function Comp2() {

    const [isNow, setNow] = useState<Date>(new Date());
    const [isDuty, setDuty] = useState<dutyProps[]>([
        { dutyName: '야미 딜리버리 api', memo: '매장, 포장, 배달 구분', priority: 1, deadline: '2024-03-29 11:00:00' },
        { dutyName: 'todo nextjs', memo: '', priority: 1, deadline: '2024-04-05 11:00:00' }
    ]);

    useEffect(() => {
        // 금일 할일 목록 조회
    }, [])

    return (
        <V.Container
            padding={{ vertical: 20, horizontal: 16 }}
            shadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1)' }}
            borderRadius={16}
        >
            <Txt as="h1" size={18}>
                { `${isNow?.getFullYear()}-${(1 + isNow?.getMonth())}-${isNow?.getDate()}` } 할일
            </Txt>

            <Spacing size={10} />

            <Txt color="#797979" size={14}>
                {'금일 할일이 있습니다. 중요한 일부터 정렬되어있습니다.😄'}
            </Txt>

            <Spacing size={20} />

            <V.Items direction="vertical" align="start" wrap="wrap" gap={5} crossGap={10}>
                {isDuty.map((item, i) => (
                    <V.Item
                        key={i}
                        width="100%"
                        padding={{ vertical: 6, horizontal: 20 }}
                        border={{ solid: 1, position: 'all', color: colors.chiffon400 }}
                        borderRadius={100}
                        txtColor="#555"
                        txtSize={14}
                        lineHeight={2}
                        backgroundColor={colors.grey600}
                    >
                        <Txt size={15} as={'h2'} color={'white'}>{item.dutyName}</Txt>
                        <Txt size={11} as={'h4'} color={colors.red}>📆 {item.deadline}</Txt>
                    </V.Item>
                ))}
            </V.Items>
        </V.Container>
    )
}
