import { Routes, Route } from "react-router-dom"
import DashboardLayout from "@/components/layout/DashboardLayout"
import Dashboard from "./features/dashboard/Dashboard"
import Surveys from "./features/surveys/Surveys"

const Analytics = () => <div>Analytics Page</div>

function App() {
  return (
    <Routes>

      <Route path="/" element={<DashboardLayout />}>

        <Route index element={<Dashboard />} />
        <Route path="surveys" element={<Surveys />} />
        <Route path="analytics" element={<Analytics />} />

    </Route>

    </Routes>
  )
}

export default App