import OrdersTable from '../../../components/dashboard/OrdersTable'

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pizza Orders</h1>
        <p className="text-gray-600 mt-2">Manage and track all pizza orders</p>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <OrdersTable />
      </div>
    </div>
  )
}