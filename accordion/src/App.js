import { useState } from "react";
import QuestionCard from "./QuestionCard";

function App() {
  const questionsArray = [
    {
      id: 1,
      question: 'Do You Accept All Major Credit Cards?',
      answer: 'Yes, we accept all major credit cards including Visa, MasterCard, and American Express.'
    },
    {
      id: 2,
      question: 'Do You Support Local Farmers?',
      answer: 'Yes, we believe in supporting our local community and source ingredients from local farmers whenever possible.'
    },
    {
      id: 3,
      question: 'Do You Use Organic Ingredients?',
      answer: 'We strive to use organic ingredients whenever feasible and source from reputable organic suppliers.'
    }
  ]

  const [questions, setQuestions] = useState(questionsArray);

  return (
    <main id="container">
      <div className="title">General Questions</div>
      <div className="questions">
        {
          questions.map((question) => {
            return <QuestionCard key={question.id} {...question} />
          })
        }
      </div>
    </main>
  );
}

export default App;
