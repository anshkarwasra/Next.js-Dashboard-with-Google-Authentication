import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../../lib/auth'
import Header from '../../components/layout/Please'
import Sidebar from '../../components/layout/Sidebar'
import SidebarProvider from '../../components/context/Provider'

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/')
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
       <Header session={session} />
      
      <div className="flex">
        <Sidebar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
    </SidebarProvider>
  )
}