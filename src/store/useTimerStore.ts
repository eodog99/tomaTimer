import { create } from 'zustand'
import { loadHistory, saveHistory, getToday } from '@/utils/storage'

interface TimerState {
  isRunning: boolean
  timeLeft: number
  totalTime: number
  selectedTime: number

  focusTime: number
  tomatoCount: number

  hasStarted: boolean

  start: () => void
  pause: () => void
  reset: () => void
  tick: () => void
  setTime: (time: number) => void
  initToday: () => void
}

export const useTimerStore = create<TimerState>((set, get) => ({
  isRunning: false,

  // 시작 시간 25분
  timeLeft: 1500,
  totalTime: 1500,
  selectedTime: 1500,

  focusTime: 0,
  tomatoCount: 0,

  hasStarted: true,

  start: () =>
    set({
      isRunning: true,
      hasStarted: true,
    }),

  pause: () =>
    set({
      isRunning: false,
    }),

  reset: () =>
    set((state) => ({
      isRunning: false,
      timeLeft: state.totalTime,
    })),

  tick: () =>
    set((state) => {
      if (state.timeLeft <= 0) {
        return {
          isRunning: false,
        }
      }

      const newFocusTime = (state.focusTime || 0) + 1

      // 🍅 25분마다 1개
      const newTomatoCount = Math.floor(newFocusTime / 1500)

      // 📅 오늘 날짜
      const today = getToday()

      // 기존 기록 불러오기
      const history = loadHistory()

      // 오늘 기록 저장
      history[today] = {
        focusTime: newFocusTime,
        tomatoCount: newTomatoCount,
      }

      saveHistory(history)

      return {
        timeLeft: state.timeLeft - 1,
        focusTime: newFocusTime,
        tomatoCount: newTomatoCount,
      }
    }),

  setTime: (time) =>
    set({
      selectedTime: time,
      totalTime: time,
      timeLeft: time,
      isRunning: false,
    }),

  initToday: () => {
    const today = getToday()

    const history = loadHistory()

    const current = history[today] || {
      focusTime: 0,
      tomatoCount: 0,
    }

    set({
      focusTime: current.focusTime || 0,
      tomatoCount: current.tomatoCount || 0,
    })
  },
}))