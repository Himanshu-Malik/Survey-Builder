import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const data = [
  { month: "Jan", responses: 120 },
  { month: "Feb", responses: 210 },
  { month: "Mar", responses: 350 },
  { month: "Apr", responses: 420 },
  { month: "May", responses: 610 },
]

const ResponseChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card border border-gray-100 dark:bg-gray-700 dark:border-gray-600">

      <h3 className="font-semibold mb-4">
        Survey Responses Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="responses"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ResponseChart