import { useEffect } from 'react'
import { useTimerStore } from '@/store/useTimerStore'

export const usePomodoro = () => {
  const { isRunning, tick } = useTimerStore()

  useEffect(() => {
    if (!isRunning) return

    const timer = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, tick])
}