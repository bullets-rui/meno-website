import './globals.css'
import { Overpass } from 'next/font/google'

// Overpassフォントの設定
const overpass = Overpass({
  subsets: ['latin'], // 必要なら['latin', 'japanese']なども可
  weight: ['100','200','300','400','500','600','700','800','900'], // 必要なウェイトを指定（適宜変更可）
  display: 'swap',
})

export const metadata = {
  title: 'Menō Ltd.',
  description: 'Space Bridge & Solution Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* フォントクラスをbodyに適用 */}
      <body className={`${overpass.className}`}>
        {children}
      </body>
    </html>
  )
}
