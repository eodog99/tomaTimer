'use client'

import { useTimerStore } from '@/store/useTimerStore'
import styles from './tomato.module.scss'

export default function TomatoVisual() {
  const { timeLeft, totalTime } = useTimerStore()
const progress = 1 - timeLeft / totalTime

const hue = 120 - progress * 120 // 초록 → 빨강
const scale = 1 + progress * 0.1
const brightness = 0.9 + progress * 0.2

  return (
    <div className={styles.tomato}>
<img
  src="/images/tomato.png"
  className={styles.tomato__image}
  style={{
    filter: `
      hue-rotate(${hue}deg)
      saturate(${1 + progress})
      brightness(${brightness})
    `,
    transform: `scale(${scale})`,
  }}
/>
    </div>
  )
}