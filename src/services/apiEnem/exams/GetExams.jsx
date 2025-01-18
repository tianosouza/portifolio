import axios from "axios"

const urlbase = 'https://api-enem.fly.dev/v1/exams/'

export const GetExams = async (pageNumber, pageSize) => {
  const response = await axios.get(`${urlbase}?page%5Bnumber%5D=${pageNumber}&page%5Bsize%5D=${pageSize}`)
  return response.data
}

export const GetExam = async () => {
  const response = await axios.get(urlbase)
  return response.data
}
