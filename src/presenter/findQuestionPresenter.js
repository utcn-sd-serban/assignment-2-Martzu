import question from "../model/question"

//"user hardcodat"
class FindQuestionPresenter {

    find()
    {
        question.searchQuestion();
    }

    findByTag()
    {
        question.searchQuestionsTag();
    }



}

const findQuestionPresenter = new FindQuestionPresenter();

export default findQuestionPresenter;