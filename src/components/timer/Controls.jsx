'use client'

import { useTimerStore } from '@/store/useTimerStore'
import styles from './controls.module.scss'


export default function Controls() {
  const { isRunning, start, pause, reset } = useTimerStore()

  return (
    
   <div className={styles.controls}>
  {isRunning ? (
    <button
      className={`${styles.controls__button} ${styles['controls__button--pause']}`}
      onClick={pause}
    >
      Pause
    </button>
  ) : (
    <button
      className={`${styles.controls__button} ${styles['controls__button--start']}`}
      onClick={start}
    >
      Start
    </button>
  )}

  <button
    className={`${styles.controls__button} ${styles['controls__button--reset']}`}
    onClick={reset}
  >
    Reset
  </button>
</div>
  )
}