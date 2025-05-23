'use client'
import { Menu, X } from 'lucide-react'
import LogoutButton from '../auth/LogoutButton'
import { useSidebar } from '../context/Provider';

export default function Header({ session }) {
  const { IsOpen,setIsOpen } = useSidebar();
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!IsOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {IsOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
          
          <h1 className="text-lg lg:text-xl font-bold text-gray-900">
            🍕 Pizza Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="flex items-center gap-2 lg:gap-3">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
              />
            )}
            <span className="text-xs lg:text-sm font-medium text-gray-700 hidden sm:block">
              {session?.user?.name}
            </span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}