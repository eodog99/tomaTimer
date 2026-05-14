'use client'

import { useTimerStore } from '@/store/useTimerStore'
import styles from './tomatoTimer.module.scss'

export default function TomatoTimer() {
  const { timeLeft, totalTime } = useTimerStore()

  const radius = 90
  const circumference = 2 * Math.PI * radius

  const progress = 1 - timeLeft / totalTime
  const offset = circumference * (1 - progress)

  // 👇 여기 추가
  const hue = 120 - progress * 120

  return (
    <div className={styles.timer}>
      <svg className={styles.timer__svg} width="220" height="220">
        <circle
          cx="110"
          cy="110"
          r={radius}
          className={styles.timer__bg}
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          className={styles.timer__progress}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* 🍅 여기 */}
      <div className={styles.timer__tomato}>
        <img
          src="/images/tomato.png"
          alt="tomato"
          style={{
            filter: `hue-rotate(${hue}deg) saturate(${1 + progress})`,
          }}
        />
      </div>
    </div>
  )
}