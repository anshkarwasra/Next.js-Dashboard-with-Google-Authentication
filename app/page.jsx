import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../lib/auth'
import LoginButton from '../components/auth/LoginButton'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🍕 Pizza Dashboard</h1>
          <p className="text-gray-600">Manage your pizza orders with ease</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-semibold text-gray-900 mb-2">Welcome!</h2>
            <p className="text-gray-600 text-sm">
              Sign in with your Google account to access your pizza order dashboard.
            </p>
          </div>
          
          <LoginButton />
        </div>
        
        <div className="mt-8 text-xs text-gray-500">
          Secure authentication powered by Google OAuth
        </div>
      </div>
    </div>
  )
}
