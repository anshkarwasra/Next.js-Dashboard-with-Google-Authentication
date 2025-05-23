import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import LogoutButton from '../auth/LogoutButton'

export default async function Header() {
  const session = await getServerSession(authOptions)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900">🍕 Pizza Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-sm font-medium text-gray-700">
              {session?.user?.name}
            </span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}