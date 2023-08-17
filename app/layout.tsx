import './globals.css'
import { RootLayout as ParentLayout } from '@/components'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Marcu Operario",
  description: 'This the Portfolio Website of Marcu Operario',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ParentLayout>
      { children }
    </ParentLayout>
  )
};
