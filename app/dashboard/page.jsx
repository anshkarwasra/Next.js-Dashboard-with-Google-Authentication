import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import WelcomeCard from '../../components/dashboard/WelcomeCard'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Hello, {session?.user?.name}! 👋
        </h1>
        <p className="text-gray-600 mt-2">Welcome back to your pizza dashboard</p>
      </div>
      
      <WelcomeCard user={session?.user} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900">Total Orders</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">24</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900">Pending Orders</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">5</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-900">Delivered Today</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </div>
      </div>
    </div>
  )
}