import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getSurveys, deleteSurvey, createSurvey, updateSurvey } from "./surveyService"
import toast from "react-hot-toast"
import Button from "@/components/ui/Button"
import { useSearchParams } from "react-router-dom"

const Surveys = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("search") || ""
    const statusFilter = searchParams.get("status") || "all"
    // const [statusFilter, setStatusFilter] = useState("all")
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const [status, setStatus] = useState("draft")
    const [editingSurvey, setEditingSurvey] = useState<any | null>(null)

    const { data: surveys, isLoading } = useQuery({
        queryKey: ["surveys"],
        queryFn: getSurveys
    })
    const filteredSurveys = surveys?.filter((survey: any) => {

        const matchesSearch =
            survey.title.toLowerCase().includes(search.toLowerCase())

        const matchesStatus =
            statusFilter === "all" || survey.status === statusFilter

        return matchesSearch && matchesStatus

    }) || []

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const currentSurveys = filteredSurveys?.slice(
    indexOfFirstItem,
    indexOfLastItem
    )

    const totalPages = Math.ceil(filteredSurveys.length / itemsPerPage)

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: deleteSurvey,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["surveys"] })
            toast.success("Survey deleted")
        },
        onError: () => {
            toast.error("Failed to delete survey")
        }
    })

    const createMutation = useMutation({
        mutationFn: createSurvey,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["surveys"] })
            setIsOpen(false)
            setTitle("")
            setStatus("draft")
            toast.success("Survey created")
        },
        onError: () => {
            toast.error("Failed to create survey")
        }
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: any) => updateSurvey(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["surveys"] })
            setIsOpen(false)
            setEditingSurvey(null)
            setTitle("")
            toast.success("Survey updated")
        },
        onError: () => {
            toast.error("Failed to update survey")
        }
    })

    if (isLoading) {
        return (
            <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center flex-wrap gap-4">

                <h1 className="text-2xl font-bold">
                    Surveys
                </h1>

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Search surveys..."
                        className="border p-2 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={search}
                        onChange={(e) =>
                            setSearchParams({
                                search: e.target.value,
                                status: statusFilter
                            })
                        }
                    />

                    <select
                        className="border p-2 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        value={statusFilter}
                        onChange={(e) =>
                            setSearchParams({
                                search,
                                status: e.target.value
                            })
                        }
                    >
                        <option value="all">All</option>
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <Button onClick={() => setIsOpen(true)} className="bg-primary text-white px-4 py-2 rounded-md">
                        Create Survey
                    </Button>

                </div>

            </div>

            <div className="bg-white border rounded-lg overflow-hidden">

                <table className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                    <thead className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <tr className="text-left text-sm text-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <th className="p-4">Title</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Responses</th>
                            <th className="p-4">Created</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        { currentSurveys.length === 0 ? (
                            <tr>
                            <td colSpan={5} className="text-center py-6 text-gray-500">
                                No surveys found
                            </td>
                            </tr>
                        ) : (
                        currentSurveys?.map((survey: any) => (

                            <tr key={survey.id} className="border-t">

                                <td className="p-4 font-medium">
                                    {survey.title}
                                </td>

                                <td className="p-4">
                                    {survey.status}
                                </td>

                                <td className="p-4">
                                    {survey.responses}
                                </td>

                                <td className="p-4">
                                    {survey.createdAt}
                                </td>

                                <td className="p-4 space-x-3">

                                    <Button className="text-blue-600" onClick={() => {
                                        setEditingSurvey(survey)
                                        setTitle(survey.title)
                                        setIsOpen(true)
                                    }}>
                                        Edit
                                    </Button>

                                    <Button className="text-red-600" onClick={() => deleteMutation.mutate(survey.id)}>
                                        Delete
                                    </Button>

                                </td>

                            </tr>

                        ))
                    )}

                    </tbody>

                </table>
                {isOpen && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

                        <div className="bg-white p-6 rounded-lg w-96 space-y-4">

                            <h2 className="text-lg font-semibold">
                                {editingSurvey ? "Edit Survey" : "Create Survey"}
                            </h2>

                            <input
                                type="text"
                                placeholder="Survey title"
                                className="w-full border p-2 rounded"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <select 
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                className="border w-full p-2 rounded">
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                            <div className="flex justify-end gap-3">

                                <Button
                                    className="px-4 py-2 border rounded"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    className="px-4 py-2 bg-primary text-white rounded"
                                    onClick={() => {

                                        if (editingSurvey) {
                                            updateMutation.mutate({
                                                id: editingSurvey.id,
                                                data: {
                                                    ...editingSurvey,
                                                    title
                                                }
                                            })
                                        } else {
                                            createMutation.mutate({
                                                title,
                                                status: status.charAt(0).toUpperCase() + status.slice(1),
                                                responses: 0,
                                                createdAt: new Date().toISOString().split("T")[0],

                                            })
                                        }

                                    }}
                                >
                                    {editingSurvey ? "Update" : "Create"}
                                </Button>

                            </div>

                        </div>

                    </div>
                )}

            </div>
            <div className="flex justify-between items-center mt-4">
                <Button onClick={() => setCurrentPage((prev) => prev - 1)} className="px-3 py-1 border rounded"  disabled={currentPage === 1}  type="button" >
                    Previous
                </Button>

                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>

                <Button onClick={() => setCurrentPage((prev) => prev + 1)} className="px-3 py-1 border rounded" disabled={currentPage === totalPages} type="button">
                    Next
                </Button>

            </div>

        </div>
    )
}

export default Surveys