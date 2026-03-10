import { api } from "@/services/api"

export const getSurveys = async () => {
  const res = await api.get("/surveys")
  return res.data
}

export const deleteSurvey = async (id: number) => {
  const res = await api.delete(`/surveys/${id}`)
  return res.data
}

export const createSurvey = async (data: any) => {
  const res = await api.post("/surveys", data)
  return res.data
}

export const updateSurvey = async (id: number, data: any) => {
  const res = await api.put(`/surveys/${id}`, data)
  return res.data
}