'use client'  // 👈 이거 무조건 맨 위

import { useEffect } from 'react'
import { useTimerStore } from '@/store/useTimerStore'

export function usePomodoro(active: boolean) {
  const { isRunning, tick } = useTimerStore()

  useEffect(() => {
    if (!active || !isRunning) return

    const interval = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [active, isRunning, tick])
}