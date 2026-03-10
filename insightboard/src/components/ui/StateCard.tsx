type Props = {
  title: string
  value: string
  change: string
}

const StatCard = ({ title, value, change }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card border border-gray-100 dark:bg-gray-700 dark:border-gray-600">

      <p className="text-sm text-gray-500 dark:text-white">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-green-600 text-sm mt-2">
        {change} from last month
      </p>

    </div>
  )
}

export default StatCard