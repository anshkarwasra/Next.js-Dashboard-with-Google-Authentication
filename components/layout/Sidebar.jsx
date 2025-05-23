"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Package, Settings, X } from 'lucide-react'
import { useSidebar } from '../context/Provider' // Adjust path as needed

export default function Sidebar() {
  const pathname = usePathname()
  const { isOpen, closeSidebar } = useSidebar();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Orders', href: '/dashboard/orders', icon: Package }
  ]

  return (
    <>
      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 z-50 
        w-64 h-screen bg-white shadow-lg border-r
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="mt-4 lg:mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar} // Close sidebar on mobile when clicking link
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                      transition-colors duration-200
                      ${isActive
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  )
}