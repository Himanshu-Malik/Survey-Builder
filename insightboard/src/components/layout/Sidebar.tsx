import { LayoutDashboard, BarChart3, ClipboardList } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">

      <h1 className="text-2xl font-bold mb-10 text-primary">
        InsightBoard
      </h1>

      <nav className="space-y-4">

        <Link
          to="/"
          className="flex items-center gap-3 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/surveys"
          className="flex items-center gap-3 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
        >
          <ClipboardList size={20} />
          Surveys
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-3 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
        >
          <BarChart3 size={20} />
          Analytics
        </Link>

      </nav>
    </aside>
  )
}

export default Sidebar