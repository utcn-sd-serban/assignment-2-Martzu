import question from "../model/question"
import findQuestionPresenter from "./findQuestionPresenter";

//"user hardcodat"
class QuestionsListPresenter {
    onCreateQuestion()
    {
        window.location.assign("#/create-question");
    }

    onChange(property, value)//asta face schimbarea
    {
        question.changeSearchedQuestionProperty(property, value);//de facut view sa vad daca mere

    }

    searchTag()
    {
        findQuestionPresenter.findByTag();
        window.location.assign("#/search-tag");
    }

    searchTitle()
    {
        debugger;
        findQuestionPresenter.find();
        window.location.assign("#/search-title");
    }

    orderedByDate()
    {
        return question.reverseArray();
    }


}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;