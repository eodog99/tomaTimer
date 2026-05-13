'use client'

import { useTimerStore } from '@/store/useTimerStore'
import styles from './timeSelector.module.scss'

const PRESETS = [1500, 3000, 3600] // 25, 50, 60분

export default function TimeSelector() {
  const { selectedTime, setTime, isRunning } = useTimerStore()

  return (
    <div className={styles.selector}>
      {PRESETS.map((time) => {
        const isActive = selectedTime === time

        return (
          <button
            key={time}
            onClick={() => setTime(time)}
            disabled={isRunning}
            className={`${styles.selector__button} ${
              isActive ? styles['selector__button--active'] : ''
            }`}
          >
            {time / 60} min
          </button>
        )
      })}
    </div>
  )
}