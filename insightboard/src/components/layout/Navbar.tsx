const Navbar = () => {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
    }
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 dark:bg-gray-800 dark:border-gray-700" >

      <h2 className="text-lg font-semibold">
        Welcome back 👋
      </h2>

      <div className="flex items-center gap-3">
        <button
            onClick={toggleDarkMode}
            className="border px-3 py-1 rounded"
            >
        Toggle Dark Mode
        </button>
        <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center">
          R
        </div>

      </div>

    </header>
  )
}

export default Navbar