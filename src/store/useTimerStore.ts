import { create } from 'zustand'
import { loadHistory, saveHistory, getToday } from '@/utils/storage'

interface TimerState {
  isRunning: boolean
  timeLeft: number
  totalTime: number
  selectedTime: number

  tomatoCount: number
  sessions: number
hasStarted: boolean
  start: () => void
  pause: () => void
  reset: () => void
  tick: () => void
  setTime: (time: number) => void
  completeSession: () => void
  initToday: () => void
}

export const useTimerStore = create<TimerState>((set, get) => ({
  isRunning: false,
  timeLeft: 15,
  totalTime: 15,
  selectedTime: 15,
  hasStarted: true,

  tomatoCount: 0,
  sessions: 0,
start: () =>
  set({
    isRunning: true,
    hasStarted: true,
  }),
  pause: () => set({ isRunning: false }),

  reset: () =>
    set((state) => ({
      isRunning: false,
      timeLeft: state.totalTime,
    })),

tick: () =>
  set((state) => {
    if (state.timeLeft <= 1) {
      if (state.hasStarted) {
        get().completeSession()
      }

      return {
        timeLeft: 0,
        isRunning: false,
        hasStarted: false,
      }
    }

    return { timeLeft: state.timeLeft - 1 }
  }),
  setTime: (time) =>
    set({
      selectedTime: time,
      totalTime: time,
      timeLeft: time,
      isRunning: false,
    }),

  completeSession: () => {
    const today = getToday()
    const history = loadHistory()

    const current = history[today] || { tomatoCount: 0, sessions: 0 }

    const updated = {
      tomatoCount: current.tomatoCount + 1,
      sessions: current.sessions + 1,
    }

    history[today] = updated
    saveHistory(history)

    set({
      tomatoCount: updated.tomatoCount,
      sessions: updated.sessions,
    })
  },

  initToday: () => {
    const today = getToday()
    const history = loadHistory()

    const current = history[today] || { tomatoCount: 0, sessions: 0 }

    set({
      tomatoCount: current.tomatoCount,
      sessions: current.sessions,
    })
  },
}))