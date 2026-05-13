'use client'

import { useTimerStore } from '@/store/useTimerStore'

export default function Controls() {
  const { isRunning, start, pause, reset } = useTimerStore()

  return (
    
    <div style={{ display: 'flex', gap: '10px' }}>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  )
}