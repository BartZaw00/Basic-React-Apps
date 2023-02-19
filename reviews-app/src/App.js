import { useEffect, useState } from 'react';
import Profile from './Profile';


function App() {
  const reviewsTable = [
    {
      id: 1,
      name: "Susan Smith",
      job: "CEO",
      img: "https://images.pexels.com/photos/7860674/pexels-photo-7860674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member1"
    },
    {
      id: 2,
      name: "Jadon Sancho",
      job: "UX Designer",
      img: "https://images.pexels.com/photos/6618822/pexels-photo-6618822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member2"
    },
    {
      id: 3,
      name: "Sara Jones",
      job: "Frontend Developer",
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member3"
    },
    {
      id: 4,
      name: "Marcus Maguire",
      job: "Backend Developer",
      img: "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member4"
    },
    {
      id: 5,
      name: "Reece James",
      job: "Full-Stack Developer",
      img: "https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member5"
    },
    {
      id: 6,
      name: "Anna Smith",
      job: "UI Designer",
      img: "https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member6"
    },
    {
      id: 7,
      name: "Scott Robertson",
      job: "Web Developer",
      img: "https://images.pexels.com/photos/13326901/pexels-photo-13326901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member7"
    },
    {
      id: 8,
      name: "John Kane",
      job: "Web Developer",
      img: "https://images.pexels.com/photos/15422042/pexels-photo-15422042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member8"
    },
    {
      id: 9,
      name: "Samantha James",
      job: "Web Designer",
      img: "https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member9"
    }
  ]

  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(reviewsTable[0]);


  function handleClick(option) {
    if (option === 1) {                    // option - left
      setIndex((prevIndex) => {
        if (prevIndex === 0)
          return 8;
        return prevIndex - 1;
      })
    }
    if (option === 2) {                    // option - right
      setIndex((prevIndex) => {
        if (prevIndex === 8)
          return 0;
        return prevIndex + 1;
      })
    }
    if (option === 3) {                    // option - surprise
      let randomNumber = Math.floor(Math.random() * 9);
      if (randomNumber === index)
        while (randomNumber === index)
          randomNumber = Math.floor(Math.random() * 9);
      setIndex(randomNumber);
    }
  }

  useEffect(() => {
    setReview(reviewsTable[index]);
  }, [index]);

  // By wrapping the handleClick calls in an arrow function, 
  // you're passing a function reference to onClick instead of calling 
  // the function directly. This will prevent the infinite loop of updates 
  // and resolve the "too many re-renders" error.

  return (
    <>
      <main id="container">
        <div className="title">Our Reviews</div>
        <div className="break"></div>
        <div className="box">
          <Profile review={review} onChange={handleClick} />
          <div>
            <button className="btn left" onClick={() => handleClick(1)}></button>
            <button className="btn right" onClick={() => handleClick(2)}></button>
          </div>
          <div className="btn-surprise-me" onClick={() => handleClick(3)}>Surprise Me</div>
        </div>
      </main>
      <footer><a id="credits" href="https://github.com/BartZaw00" target="_blank">Created By <span>Bartosz
        Zawadka</span></a></footer>
    </>
  );
}

export default App;
