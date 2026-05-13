'use client'

import { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShow(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()

    const choice = await deferredPrompt.userChoice

    if (choice.outcome === 'accepted') {
      console.log('설치됨 👍')
    }

    setDeferredPrompt(null)
    setShow(false)
  }

  if (!show) return null

  return (
    <div style={wrapperStyle}>
      <p>🍅 앱으로 설치하고 더 편하게 사용해보세요</p>
      <button onClick={handleInstall} style={buttonStyle}>
        설치하기
      </button>
    </div>
  )
}

const wrapperStyle = {
  position: 'fixed' as const,
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#fff',
  padding: '12px 16px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  zIndex: 999,
}

const buttonStyle = {
  marginTop: '8px',
  padding: '8px 12px',
  background: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
}