import '@/styles/globals.scss'
import ClientProvider from './ClientProvider'

export const metadata = {
  title: 'Tomato Pomodoro',
  description: '토마토 타이머',
  manifest: '/manifest.json',
  icons: {
    apple: '/icons/icon-192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}