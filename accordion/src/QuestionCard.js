import Question from "./Question";
import { useState } from "react";

function QuestionCard(item) {
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <div className="question">
            <div className="question-header">
                <p>{item.question}</p>
                <button onClick={() => setToggleBtn(!toggleBtn)}>{toggleBtn ? '-' : '+'}</button>
            </div>
            {toggleBtn && <Question {...item} />}
        </div>
    );
}

export default QuestionCard;
