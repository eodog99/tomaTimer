'use client'
import { useEffect } from 'react'
import { useTimerStore } from '@/store/useTimerStore'

import TomatoVisual from '@/components/tomato/TomatoVisual'
import TimerDisplay from '@/components/timer/TimerDisplay'
import Controls from '@/components/timer/Controls'
import { usePomodoro } from '@/hooks/usePomodoro'
import TimeSelector from '@/components/timer/TimeSelector'
import TomatoFarm from '@/components/tomato/TomatoFarm'

export default function Home() {
  usePomodoro()

  const initToday = useTimerStore((state) => state.initToday)

  useEffect(() => {
    initToday()
  }, [initToday])

  return (
    <main className="home">
      <div className="home__card">
        <TomatoVisual />
        <TimerDisplay />
        <TimeSelector />
        <Controls />
        <TomatoFarm />
      </div>
    </main>
  )
}