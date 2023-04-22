import * as Collapsible from '@radix-ui/react-collapsible'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { useState } from 'react'

export function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root
      className="h-screen w-screen text-rotion-100 flex"
      defaultOpen
      onOpenChange={setIsSidebarOpen}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
