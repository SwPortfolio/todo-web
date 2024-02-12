import React from 'react';
import { NextRouter, useRouter } from 'next/router';

//assets
import { Image } from 'react-image-cached-resizer';
import { Button, Spacing } from '@/_ui';

//libs

export default function Result() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Image
        source="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public"
        alt="위젯 이미지"
        size={{ width: '100%' }}
        borderRadius={10}
      />

      <Spacing size={20} />

      <Button width="100%" onClick={() => router.push('/')}>
        확인하기
      </Button>
    </>
  );
}
