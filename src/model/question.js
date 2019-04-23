import { EventEmitter} from "events";

class Question extends EventEmitter
{

    constructor()
    {
        super();
        this.state =
            {
                questions:
                [
                    {
                        id: 1,
                        user: "John",
                        title: "SD problem",
                        text: "Webstorm doesn't compile",
                        tags: "sd, javascript",
                        date: "Sun Apr 13 2019"

                    }

                ],

                id: 2,

                newQuestion: {
                    user: "",
                    title: "",
                    text: "",
                    tags: "",
                    date: ""
                },

                tagContainingQuestions: [],

                searchedQuestion: {},

                toSearch: ""

            };


    }


    addQuestion(user, title, text, tags)
    {
        this.state =
            {
                ...this.state,
                questions: this.state.questions.concat([{
                    id: this.state.id++,
                    user: user,
                    title: title,
                    text: text,
                    tags: tags,
                    date: new Date().toDateString()
                }])
            };
        this.emit("change", this.state);
    }


    searchQuestionsTag()
    {
        const tagContainingQuestions = this.state.questions.filter((quest) => quest.tags.indexOf(this.state.searchedQuestion.toSearch) !== -1);
        this.state =
            {
                ...this.state,
                tagContainingQuestions:
                tagContainingQuestions
            };

        this.emit("change", this.state);
    }

    searchQuestion()
    {
            const searchedQuestion = this.state.questions.find((quest) => quest.title === this.state.searchedQuestion.toSearch);
            this.state =
                {
                    ...this.state,
                    searchedQuestion: searchedQuestion
                };
            this.emit("change", this.state);


    }

    changeSearchedQuestionProperty(property, value)
    {
        this.state = {
            ...this.state,
            searchedQuestion: {
                ...this.state.searchedQuestion,
                [property] : value
            }
        }
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    reverseArray() {
        let newArray = [];
        for (let i = this.state.questions.length - 1; i >= 0; i--) {
            newArray.push(this.state.questions[i]);
        }
        return newArray;
    }
}

const question = new Question();

export default question;