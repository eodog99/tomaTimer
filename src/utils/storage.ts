export function getToday() {
  return new Date().toISOString().split('T')[0]
}

export function loadHistory() {
  if (typeof window === 'undefined') return {}

  const data = localStorage.getItem('tomato-history')

  return data ? JSON.parse(data) : {}
}

export function saveHistory(history: any) {
  localStorage.setItem('tomato-history', JSON.stringify(history))
}