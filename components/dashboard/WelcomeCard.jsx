export default function WelcomeCard({ user }) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
      <div className="flex items-center gap-4">
        {user?.image && (
          <img
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-full border-3 border-white shadow-lg"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold">Welcome back, {user?.name}!</h2>
          <p className="text-orange-100 mt-1">
            Ready to manage some delicious pizza orders?
          </p>
        </div>
      </div>
    </div>
  )
}