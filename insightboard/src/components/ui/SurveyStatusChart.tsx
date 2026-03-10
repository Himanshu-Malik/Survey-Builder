import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Active", value: 8 },
  { name: "Draft", value: 5 },
  { name: "Closed", value: 3 },
]

const COLORS = ["#2563EB", "#F59E0B", "#10B981"]

const SurveyStatusChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card border border-gray-100 dark:bg-gray-700 dark:border-gray-600">

      <h3 className="font-semibold mb-4">
        Survey Status Distribution
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default SurveyStatusChart