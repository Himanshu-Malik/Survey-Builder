import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-6 bg-gray-50 min-h-screen dark:bg-gray-800">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout