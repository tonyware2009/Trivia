import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Trivia.js";
import { trApi } from "./AxiosService.js"

class TriviaService {
  async getTrivia() {

    let res = await trApi.get('')
    console.log(res.data)
    ProxyState.questions = res.data.results.map(q => new Question(q))
    console.log(Question)

  }

}
console.log('service is working')

export const triviaService = new TriviaService();