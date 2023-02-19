import Question from "./Question";
import { useState } from "react";

function QuestionCard(props) {
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <div className="question">
            <div className="question-header">
                <p>{props.questionCard.question}</p>
                <button onClick={() => setToggleBtn(!toggleBtn)}>{toggleBtn ? '-' : '+'}</button>
            </div>
            {toggleBtn && <Question questionCard={props.questionCard} />}
        </div>
    );
}

export default QuestionCard;
