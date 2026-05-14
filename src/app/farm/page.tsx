'use client'

import { useEffect, useState } from 'react'
import { loadHistory } from '@/utils/storage'
import styles from './farm.module.scss'

export default function FarmPage() {
  const [calendar, setCalendar] = useState<
    { date: string; count: number }[]
  >([])
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const history = loadHistory()

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const temp = []

    for (let i = 1; i <= daysInMonth; i++) {
      const day = String(i).padStart(2, '0')
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${day}`

      const count = history[date]?.tomatoCount || 0

      temp.push({ date, count })
    }

    setCalendar(temp)
  }, [currentDate])

  const prevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    )
  }

  const nextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    )
  }

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1

  return (
    <div className={styles.farm}>
      {/* 🔥 헤더 */}
      <div className={styles.header}>
        <button onClick={prevMonth}>{'<'}</button>
        <h2>
          {year}년 {month}월
        </h2>
        <button onClick={nextMonth}>{'>'}</button>
      </div>

      {/* 캘린더 */}
      <div className={styles.grid}>
        {calendar.map((item) => (
          <div
            key={item.date}
            className={`${styles.cell} ${styles[getLevel(item.count)]}`}
          >
            {item.count > 0 && <span>🍅</span>}

            <div className={styles.tooltip}>
              {item.date}
              <br />
              🍅 {item.count}개
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getLevel(count: number) {
  if (count === 0) return 'level0'
  if (count < 2) return 'level1'
  if (count < 4) return 'level2'
  if (count < 7) return 'level3'
  return 'level4'
}