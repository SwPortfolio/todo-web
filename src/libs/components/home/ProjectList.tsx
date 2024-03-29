//libs
import { Spacing, Txt, V } from '@/_ui'
import { colors } from '@/libs/themes/colors'
import { useEffect, useState } from 'react'
import { getProjectListAPI } from '@/_https/api/project'
import { ca } from 'date-fns/locale'


interface isProjectListProps {
  projectPkey: number,
  projectName: string,
  projectColor: string,
  fontColor: string,
  regDate: string
}

const fontColorList = [
  '#FF0000', '#DC143C', '#B22222', '#800000', '#8B0000', '#A52A2A', '#A0522D', '#8B4513', '#B8860B', '#808000', '#6B8E23', '#556B2F', '#228B22', '#006400',
  '#008080', '#008B8B', '#4682B4', '#4169E1', '#0000FF', '#0000CD', '#000080', '#00008B', '#191970', '#483D8B', '#6A5ACD', '#7B68EE', '#9370DB', '#9932CC',
  '#9400D3', '#8A2BE2', '#BA55D3', '#4B0082', '#8B008B', '#800080', '#C71585', '#FF1493', '#DB7093', '#778899', '#708090', '#808080', '#696969', '#2F4F4F',
  '#000000'
]
//
export default function ProjectList() {

  const [isProjectList, setProjectList] = useState<isProjectListProps[]>([]);

  // 프로젝트 목록 조회
  const handelProjectList = async () => {
    const projectList: isProjectListProps[] = [];
    try {
      const res = await getProjectListAPI();

      res.data.body.projectList.map((item: any) => {
        projectList.push({
          projectPkey: item.projectPkey,
          projectName: item.projectName,
          projectColor: item.projectColor,
          fontColor: fontColorList.includes(item.projectColor) ? 'white' : 'black',
          regDate: item.regDate
        })
      })

      setProjectList(projectList);
    } catch (err) {
      setProjectList([]);
    }
  }

  const handelProjectDetail = (projectPkey: number) => {
    try {
      alert(`프로젝트 상세조회 ${projectPkey}`);
    } catch (err) {

    }
  }

  const handelProjectAdd = () => {
    try {
      alert('프로젝트 생성');
    } catch (err) {

    }
  }

  useEffect(() => {
    // 프로젝트 목록 조회
    handelProjectList();
  }, [])

  return (
    <V.Container
      padding={{ vertical: 20, horizontal: 16 }}
      shadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1)' }}
      borderRadius={16}
    >
      <Txt as="h2" size={18}>
          프로젝트 목록
      </Txt>

      <Spacing size={6} />

      <Txt color={colors.grey200}>당신의 생산성을 위해 모든 것을 준비해뒀어요 🧑‍💻</Txt>

      <Spacing size={16} />

      <V.ScrollDragHorizontal>
        <V.Items direction="horizontal" gap={8}>
          {isProjectList.map((item, i) => (
            <V.Item
                key={i}
                minWidth={190}
                padding={{ all: 16 }}
                border={{ solid: 1, color: colors.chiffon400 }}
                borderRadius={16}
                gap={8}
                backgroundColor={item.projectColor}
                onClick={() => {handelProjectDetail(item.projectPkey)}}
            >
              <Txt size={16} as="strong" color={item.fontColor === 'black' ? colors.black : colors.white}>
                {item.projectName}
              </Txt>
              <Txt size={11} color={item.fontColor === 'black' ? colors.black : colors.white} whiteSpace="pre-line">
                {item.regDate}
              </Txt>
            </V.Item>
          ))}
          <V.Item
            key={99999}
            minWidth={190}
            padding={{ all: 16 }}
            border={{ solid: 1, color: colors.chiffon400 }}
            borderRadius={16}
            gap={8}
            align={'center'}
            onClick={() => {handelProjectAdd()}}
          >
            <Txt size={13} as="strong">
              프로젝트 추가
            </Txt>
            <Txt size={20} color={colors.black} whiteSpace="pre-line">
              +
            </Txt>
          </V.Item>
        </V.Items>
      </V.ScrollDragHorizontal>
    </V.Container>
  )
}
