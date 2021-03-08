import { create } from 'apisauce'

const api = create({
  baseURL: 'https://msging.net',
  headers: { 'Content-Type': 'application/json' },
})

export default api