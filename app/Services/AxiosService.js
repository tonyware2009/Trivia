

export const trApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean',
  timeout: 3000
})