'use client'
import { useState, useMemo } from 'react'
import { mockPizzaOrders } from '../../lib/data'
import Badge from '../ui/Badge'
import { ChevronUp, ChevronDown, Filter } from 'lucide-react'

export default function OrdersTable() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [statusFilter, setStatusFilter] = useState('all')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = mockPizzaOrders
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter)
    }

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return filtered
  }, [sortConfig, statusFilter])

  const handleSort = (key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const SortButton = ({ column, children, className = "" }) => (
    <button
      onClick={() => handleSort(column)}
      className={`flex items-center gap-1 font-medium text-left hover:text-orange-600 transition-colors ${className}`}
    >
      {children}
      {sortConfig.key === column && (
        sortConfig.direction === 'asc' ? 
          <ChevronUp className="w-4 h-4" /> : 
          <ChevronDown className="w-4 h-4" />
      )}
    </button>
  )

  return (
    <div className="space-y-4">
      {/* Filter Controls */}
      <div className="p-4 border-b">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <h3 className="font-medium text-gray-900">Filters</h3>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Filter dropdown - always visible on desktop, toggle on mobile */}
        <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full lg:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortButton column="id">Order ID</SortButton>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortButton column="customerName">Customer</SortButton>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pizza Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortButton column="quantity">Quantity</SortButton>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <SortButton column="orderDate">Order Date</SortButton>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.pizzaType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className=" w-full lg:hidden space-y-4 p-4">
        {filteredAndSortedOrders.map((order) => (
          <div key={order.id} className="bg-white border rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">Order #{order.id}</h3>
                <p className="text-sm text-gray-600">{order.customerName}</p>
              </div>
              <Badge status={order.status} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Pizza:</span>
                <p className="font-medium">{order.pizzaType}</p>
              </div>
              <div>
                <span className="text-gray-500">Quantity:</span>
                <p className="font-medium">{order.quantity}</p>
              </div>
            </div>
            
            <div className="text-sm">
              <span className="text-gray-500">Order Date:</span>
              <p className="font-medium">{order.orderDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}