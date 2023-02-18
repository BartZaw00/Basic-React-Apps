import profile1 from './assets/profile-1.png';
import profile2 from './assets/profile-2.png';
import profile3 from './assets/profile-3.png';
import profile4 from './assets/profile-4.png';
import profile5 from './assets/profile-5.png';
import profile6 from './assets/profile-6.png';
import profile7 from './assets/profile-7.png';
import profile8 from './assets/profile-8.png';
import profile9 from './assets/profile-9.png';
import Profile from './Profile';


function App() {
  const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "CEO",
      img: "assets/member-1.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member1"
    },
    {
      id: 2,
      name: "Jadon Sancho",
      job: "UX Designer",
      img: "assets/member-2.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member2"
    },
    {
      id: 3,
      name: "Sara Jones",
      job: "Frontend Developer",
      img: "assets/member-3.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member3"
    },
    {
      id: 4,
      name: "Marcus Maguire",
      job: "Backend Developer",
      img: "assets/member-4.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member4"
    },
    {
      id: 5,
      name: "Reece James",
      job: "Full-Stack Developer",
      img: "assets/member-5.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member5"
    },
    {
      id: 6,
      name: "Anna Smith",
      job: "UI Designer",
      img: "assets/member-6.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member6"
    },
    {
      id: 7,
      name: "Scott Robertson",
      job: "Web Developer",
      img: "assets/member-7.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member7"
    },
    {
      id: 8,
      name: "John Kane",
      job: "Web Developer",
      img: "assets/member-8.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member8"
    },
    {
      id: 9,
      name: "Samantha James",
      job: "Web Designer",
      img: "assets/member-9.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti voluptate labore ullam pariatur vitae consequuntur iste aliquam quos repellat, tempore omnis impedit dicta magni dolorem atque autem temporibus member9"
    }
  ]

  return (
    <main id="container">
      <div className="title">Our Reviews</div>
      <div className="break"></div>
      <div className="box">
        {
          reviews.map((review) => {
            <Profile key={review.id} review={review} />
          })
        }
        <div>
          <button className="btn left" ></button>
          <button className="btn right" ></button>
        </div>
        <div className="btn-surprise-me">Surprise Me</div>
      </div>
    </main>
  );
}

export default App;
