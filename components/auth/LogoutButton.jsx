'use client'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  )
}