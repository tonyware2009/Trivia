export class Question {
  constructor(data) {
    this.difficulty = data.easy
    this.category = data.category
    this.question = data.question
    this.correct = data.correct_answer
    this.false = data.incorrect_answer


  }
  get Template() {
    return `
  <div class="row" >
        <div class="col-12">
          <h4>Question Name:${this.question}</h4>
        </div>
        <div class="col-12">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button onclick="app.triviaController.guess('True')" type="button" class="btn btn-secondary">True</button>

            <button type="button" class="btn btn-secondary">False</button>
          </div>
        </div>`
  }
}