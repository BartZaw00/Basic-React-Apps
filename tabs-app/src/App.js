function App() {
  return (
    <main id="container">
      <h1 className="title">Experience</h1>
      <div className="title-line"></div>
      <div className="experience">
        <div className="buttons">
          <button className="button one" >ALL</button>
          <button className="button" >BREAKFAST</button>
          <button className="button" >LUNCH</button>
        </div>
        <div className="experience-details">
          <div className="details-title">Full Stack Web Developer</div>
          <div className="details-job">TOMMY</div>
          <div className="details-time">December 2015 - Present</div>
          <div className="details">
            <div className="detail">
              <span>{">>"}</span>
              <p>As a full stack developer, you were responsible for developing and maintaining all aspects of a web application, from the front-end user interface to the back-end server logic.</p>
            </div>
            <div className="detail">
              <span>{">>"}</span>
              <p>You worked with a wide range of technologies and programming languages to create functional and responsive websites or applications. You collaborated with a team of designers, project managers, and other developers to ensure that the product meets the client's requirements and specifications.</p>
            </div>
            <div className="detail">
              <span>{">>"}</span>
              <p>As a full stack developer, you were well-versed in both front-end and back-end development, and were capable of implementing features, testing, and deploying applications.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu">
        {

        }
      </div>
    </main>
  );
}

export default App;
