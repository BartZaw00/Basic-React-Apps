function Question(props) {
    return (
        <>
            <div className="break-line"></div>
            <div className="question-text">{props.questionCard.answer}</div>
        </>
    );
}

export default Question;
