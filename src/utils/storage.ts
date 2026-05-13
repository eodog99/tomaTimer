export const STORAGE_KEY = 'tomato-history'

export const getToday = () => {
  return new Date().toISOString().slice(0, 10)
}

export const loadHistory = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : {}
}

export const saveHistory = (history: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}