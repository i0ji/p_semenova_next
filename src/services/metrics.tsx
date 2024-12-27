'use client';

import { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';

const YM_COUNTER_ID = 94167063;

export default function Metrics() {
  const hit = (url: string) => {
    ym('hit', url);
  };

  useEffect(() => {
    hit(window.location.pathname + window.location.search);
  }, []);

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }}
      version="2"
    />
  );
}
