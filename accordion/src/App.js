import QuestionCard from "./QuestionCard";

function App() {
  return (
    <main id="container">
      <div class="title">General Questions</div>
      <div class="questions">
        <div data-question class="question">
          <div className="question-header">
            <p>Do You Accept All Major Credit Cards?</p>
            <button data-button>+</button>
          </div>
          <div class="break-line"></div>
          <div class="question-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea,
            accusamus a consectetur esse porro omnis dolores dolor officia dolore.</div>
        </div>
        <div data-question class="question">
          <p>Do You Support Local Farmers?</p><button data-button>+</button>
          <div class="active">
            <div class="active-line"></div>
            <div class="active-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea,
              accusamus a consectetur esse porro omnis dolores dolor officia dolore.</div>
          </div>
        </div>
        <div data-question class="question">
          <p>Do You Use Organic Ingredients?</p><button data-button>+</button>
          <div class="active">
            <div class="active-line"></div>
            <div class="active-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea,
              accusamus a consectetur esse porro omnis dolores dolor officia dolore.</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
