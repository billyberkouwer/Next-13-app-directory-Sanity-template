"use client"

import '@/styles/global.scss';
import { LabGrotesque } from './font/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={LabGrotesque.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
