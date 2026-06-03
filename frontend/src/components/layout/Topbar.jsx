// Topbar component - Top navigation bar
import { Search } from 'lucide-react'
import SearchBar from './SearchBar'
import NotificationBell from './NotificationBell'
import UserProfile from './UserProfile'

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-slate-800 text-white flex items-center px-4 justify-between">
      <h1 className="text-2xl font-bold">Ai Voice Agent</h1>
      <SearchBar />
      <NotificationBell />
      <UserProfile />
    </div>
  )
}

export default Topbar