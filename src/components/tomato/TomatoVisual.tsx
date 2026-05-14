'use client'

import { useTimerStore } from '@/store/useTimerStore'

export default function TomatoVisual() {
  const { timeLeft, totalTime } = useTimerStore()

  const progress = 1 - timeLeft / totalTime

  // 🎯 0~1 → 0.3~0.8로 압축
  const min = 0.5
  const max = 0.7
  const adjusted = min + (max - min) * progress

  return (
    <div style={{ position: 'relative', width: 160, margin: '0 auto' }}>
    <img
  src="/images/tomato.png"
  style={{
    width: '100%',
    display: 'block',

    // 🔥 핵심
    filter: `
      hue-rotate(${(1 - adjusted) * 120}deg)
      saturate(${0.8 + adjusted * 0.4})
      brightness(${0.9 + adjusted * 0.1})
    `,
  }}
/>

      {/* 🎯 초록도 범위 줄이기 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',

          // 👉 alpha도 adjusted 기준으로
        background: 'red',
          mixBlendMode: 'color',
          transition: '0.3s',
        }}
      />
    </div>
  )
}