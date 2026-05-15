'use client'

import { useEffect, useState } from 'react'
import { useTimerStore } from '@/store/useTimerStore'

import TomatoTimer from '@/components/tomato/TomatoTimer'
import TimerDisplay from '@/components/timer/TimerDisplay'
import Controls from '@/components/timer/Controls'
import { usePomodoro } from '@/hooks/usePomodoro'
import TimeSelector from '@/components/timer/TimeSelector'
import TomatoFarm from '@/components/tomato/TomatoFarm'
import Splash from '@/components/Splash'

import { useRouter } from 'next/navigation'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const initToday = useTimerStore((state) => state.initToday)
  const router = useRouter()

  useEffect(() => {
    initToday()
  }, [initToday])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // ✅ 항상 호출
  usePomodoro(!showSplash)

  if (showSplash) return <Splash />

  return (
    <main className="home">
      <div className="home__card">
        <TomatoTimer />
        <TimerDisplay />
        <TimeSelector />
        <Controls />
        <TomatoFarm />

        {/* <button className='btn-farm' onClick={() => router.push('/farm')}>
          🍅 농장 보러가기
        </button> */}
      </div>
    </main>
  )
}