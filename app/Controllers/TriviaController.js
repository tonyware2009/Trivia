import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"
function _drawQuestions() {
  let questions = ProxyState.questions
  let template = ''
  questions.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template
}
export class TriviaController {
  constructor() {
    ProxyState.on('questions', _drawQuestions)

    triviaService.getTrivia()
  }
  guess(Answer) {
    console.log(Answer)
  }
}

