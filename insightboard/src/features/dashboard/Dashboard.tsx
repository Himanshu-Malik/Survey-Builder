import { useQuery } from "@tanstack/react-query"
import { getSurveys } from "@/features/surveys/surveyService"
import StatCard from "@/components/ui/StateCard"
import ResponseChart from "@/components/ui/ResponseChart"
import SurveyStatusChart from "@/components/ui/SurveyStatusChart"

const Dashboard = () => {

  const { data: surveys, isLoading } = useQuery({
    queryKey: ["surveys"],
    queryFn: getSurveys
  })

  if (isLoading) {
    return <div>Loading dashboard...</div>
  }
console.log(surveys)
  const totalSurveys = surveys.length

  return (
    <div className="space-y-6 dark:bg-gray-800">

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Surveys"
          value={totalSurveys.toString()}
          change="+12%"
        />

        <StatCard
          title="Total Responses"
          value="1,284"
          change="+18%"
        />

        <StatCard
          title="Completion Rate"
          value="72%"
          change="+4%"
        />

        <StatCard
          title="Active Users"
          value="845"
          change="+9%"
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

        <ResponseChart />

        <SurveyStatusChart />

    </div>

    </div>
  )
}

export default Dashboard