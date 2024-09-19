import { SidebarDesktop } from '@/components/sidebar-desktop'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      <div className="flex-1 overflow-auto">
        <h1 style={{ padding: '20px', background: 'yellow', margin: '10px' }}>Hello World</h1>
        {children}
      </div>
    </div>
  )
}
