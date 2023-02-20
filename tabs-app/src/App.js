import { useEffect, useState } from "react";
import Experience from "./Experience";

function App() {
  const jobsArray = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      company: 'Comarch',
      time: 'December 2015 - Present',
      description1: 'I was responsible for developing and maintaining all aspects of a web application, from the front-end user interface to the back-end server logic.',
      description2: "I worked with a wide range of technologies and programming languages to create functional and responsive websites or applications. I collaborated with a team of designers, project managers, and other developers to ensure that the product meets the client's requirements and specifications.",
      description3: "As a full stack developer, I was well-versed in both front-end and back-end development, and was capable of implementing features, testing, and deploying applications.",
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Commerzbank',
      time: 'December 2012 - November 2015',
      description1: 'I worked on developing and maintaining various features for a popular search engine.',
      description2: 'I was responsible for writing high-quality code that was scalable and easy to maintain.',
      description3: 'I collaborated with a team of engineers and product managers to prioritize tasks and ensure timely delivery of projects.',

    },
    {
      id: 3,
      title: 'Mobile App Developer',
      company: 'Mbank',
      time: 'May 2012 - August 2012',
      description1: 'I work on developing and maintaining features for the Uber app on both iOS and Android platforms.',
      description2: 'I collaborate with a team of designers, engineers, and product managers to deliver high-quality features that improve the overall user experience.',
      description3: 'As a mobile app developer, I am responsible for writing clean, maintainable code and implementing best practices in mobile app development.',
    }
  ]

  const [index, setIndex] = useState(0);
  const [job, setJob] = useState(jobsArray[index]);

  useEffect(() => {
    setJob(jobsArray[index]);
  }, [index])

  return (
    <main id="container">
      <h1 className="title">Experience</h1>
      <div className="title-line"></div>
      <div className="experience">
        <div className="buttons">
          <button className={index === 0 ? 'button one' : 'button'} onClick={() => setIndex(0)}>{jobsArray[0].company.toUpperCase()}</button>
          <button className={index === 1 ? 'button one' : 'button'} onClick={() => setIndex(1)}>{jobsArray[1].company.toUpperCase()}</button>
          <button className={index === 2 ? 'button one' : 'button'} onClick={() => setIndex(2)}>{jobsArray[2].company.toUpperCase()}</button>
        </div>
        <Experience job={job} />
      </div>
    </main>
  );
}

export default App;
