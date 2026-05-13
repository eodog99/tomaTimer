'use client'

import { useTimerStore } from '@/store/useTimerStore'

export default function TimerDisplay() {
  const { timeLeft } = useTimerStore()

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      {String(minutes).padStart(2, '0')}:
      {String(seconds).padStart(2, '0')}
    </div>
  )
}