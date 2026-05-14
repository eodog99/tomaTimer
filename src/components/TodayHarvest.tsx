'use client'

import { loadHistory } from '@/utils/storage'

export default function TodayHarvest() {
  const today = new Date().toISOString().slice(0, 10)
  const history = loadHistory()

  const count = history[today]?.tomatoCount || 0

return (
  <div style={{ marginTop: '24px', textAlign: 'center' }}>
    <p style={{ fontSize: '14px', color: '#888' }}>
      Today Harvest
    </p>

    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px',
      }}
    >
      <span style={{ fontSize: '28px' }}>🍅</span>
      <span style={{ fontSize: '24px', fontWeight: 600 }}>
        × {count}
      </span>
    </div>
  </div>
)
}