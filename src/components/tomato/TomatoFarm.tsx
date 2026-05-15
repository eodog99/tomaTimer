'use client'

import { useRouter } from 'next/navigation'
import { useTimerStore } from '@/store/useTimerStore'

import styles from './tomatoFarm.module.scss'

export default function TomatoFarm() {
  const { tomatoCount } = useTimerStore()

  const router = useRouter()

  return (
    <div
      className={styles.farm}
      onClick={() => router.push('/farm')}
    >
      <div className={styles.farm__list}>
        <h2>🍅 × {tomatoCount}</h2>

        <p className={styles.farm__link}>
          Farm →
        </p>
      </div>
    </div>
  )
}