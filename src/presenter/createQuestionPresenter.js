import question from "../model/question"

//"user hardcodat"
class CreateQuestionPresenter{

    onCreate(){
       question.addQuestion("Alex", question.state.newQuestion.title, question.state.newQuestion.text, question.state.newQuestion.tags);
       question.changeNewQuestionProperty("title", "");
       question.changeNewQuestionProperty("text", "");
       question.changeNewQuestionProperty("tags","");
       window.location.assign("#/");
    }

    onChange(property, value)
    {
        question.changeNewQuestionProperty(property, value);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;