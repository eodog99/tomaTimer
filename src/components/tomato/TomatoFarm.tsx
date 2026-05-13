'use client'

import { useTimerStore } from '@/store/useTimerStore'
import styles from './tomatoFarm.module.scss'

export default function TomatoFarm() {
  const { tomatoCount } = useTimerStore()

  return (
    <div className={styles.farm}>
      <p className={styles.farm__title}>오늘 수확 🍅</p>

      <div className={styles.farm__list}>
        {Array.from({ length: tomatoCount }).map((_, i) => (
          <span key={i} className={styles.farm__tomato}>
            🍅
          </span>
        ))}
      </div>

      <p className={styles.farm__count}>
        총 {tomatoCount}개
      </p>
    </div>
  )
}