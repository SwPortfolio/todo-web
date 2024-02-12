import React, { useState } from 'react';

//libs
import { colors } from '@/libs/themes';
import { moment } from '@/libs/utils/moment';
import {
  Column,
  Row,
  Container,
  Spacing,
  Txt,
  TxtSpan,
  TxtTab,
  Button,
  Dialog,
  BottomSheet,
  CalenderModal,
} from '@/_ui';

//
export default function Comp4() {
  const [isOpen, setIsOpen] = useState<boolean | 'dialog' | 'bottomSheet' | 'calenderModal'>(false);
  const [isDate, setIsDate] = useState<Date | null>(null);

  return (
    <>
      <Container>
        <Txt as="h2" size={18}>
          {'네이티브 모달을\n웹에서도 사용해보세요'}
        </Txt>

        <Spacing size={8} />

        <Txt color={colors.grey200}>
          {'각 OS의 디자인 시스템을 고려하여\n웹에서도 유연한 UI 모달을 구현했어요'}
        </Txt>

        {!!isDate && <TxtSpan padding={{ top: 10 }}>현재 선택된 날짜 : {moment(isDate)}</TxtSpan>}

        <Spacing size={20} />

        <Container
          border={{ solid: 1, color: colors.chiffon400 }}
          align="center"
          padding={{ all: 16 }}
          borderRadius={16}
        >
          <Row gap={20} align="center" crossAlign="center">
            <TxtTab onClick={() => setIsOpen('dialog')}>다이아 로그</TxtTab>
            <TxtTab onClick={() => setIsOpen('bottomSheet')}>바텀 시트</TxtTab>
            <TxtTab onClick={() => setIsOpen('calenderModal')}>켈린더 모달</TxtTab>
          </Row>
        </Container>
      </Container>

      {/* 다이아로그 모달 */}
      <Dialog
        open={isOpen === 'dialog'}
        onCancel={() => setIsOpen(false)}
        title="다이아 로그"
        description={'Android OS에서 영감을 받은\nDialog 모달 위젯이에요!'}
        tabs={[{ name: '닫기' }]}
      />

      {/* 바텀시트 모달 */}
      <BottomSheet open={isOpen === 'bottomSheet'} onCancel={() => setIsOpen(false)}>
        <Column gap={10} padding={{ vertical: 16, horizontal: 20 }}>
          <Txt as="h6" size={18}>
            바텀 시트
          </Txt>
          <Txt size={14} color={colors.grey200}>
            {
              'IOS에서 영감을 받은 BottomSheet 모달 위젯이에요!\n바텀 시트는 모바일에서 위에서 아래로 터치를 통해 닫을 수도 있어요!'
            }
          </Txt>
          <Button margin={{ top: 10 }} onClick={() => setIsOpen(false)}>
            확인완료
          </Button>
        </Column>
      </BottomSheet>

      {/* 캘린더 모달 */}
      <CalenderModal
        open={isOpen === 'calenderModal'}
        onCancel={() => setIsOpen(false)}
        value={isDate ? isDate : new Date()}
        onChange={(date: any) => {
          setIsOpen(false);
          setIsDate(date);
        }}
      />
    </>
  );
}