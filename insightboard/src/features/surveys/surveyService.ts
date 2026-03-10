import { api } from "@/services/api"
const API_URL = "https://69b06951c63dd197febc373d.mockapi.io/survey"
export const getSurveys = async () => {
  const res = await api.get(API_URL)
  return res.data
}

export const deleteSurvey = async (id: number) => {
  const res = await api.delete(`${API_URL}/${id}`)
  return res.data
}

export const createSurvey = async (data: any) => {
  const res = await api.post(API_URL, data)
  return res.data
}

export const updateSurvey = async (id: number, data: any) => {
  const res = await api.put(`/surveys/${id}`, data)
  return res.data
}