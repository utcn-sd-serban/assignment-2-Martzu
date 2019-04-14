import React from 'react';
//nu-mi trebe user aicea, ci in presenter si il pot trimite din smart component
//da cand creez un nou question imi trebuie si useru, da pot sa-l adaug dupa
//da-l in ma0sa, il harcodez
const SearchedQuestion = ({searchedQuestion}) => (


    <div className={"columns"}>
        <div className={"column"}>
        </div>

        <div className={"column"}>
            <article className="message">
                <div className="message-header">
                    <p>{searchedQuestion.title}
                    </p>

                    <p>Created by {searchedQuestion.user}
                        <p> {searchedQuestion.date}</p>
                    </p>
                </div>
                <div className="message-body">
                    {searchedQuestion.text}
                    <br/>


                </div>
                <span className="tag is-dark">{searchedQuestion.tags}</span>
            </article>
        </div>

        <div className={"column"}>
        </div>

    </div>




);
export default SearchedQuestion;