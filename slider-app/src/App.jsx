import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Loading } from "./Loading";
import { Profile } from "./Profile";

const url = "https://random-data-api.com";

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const fetchSliderData = async () => {
    try {
      const response = await fetch(`${url}/api/users/random_user?size=6`);
      const sliderData = await response.json();
      setLoading(false);
      setPeople(sliderData);
      console.log(sliderData);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main id="container">
      <div className="title">Slider App</div>
      <div className="break"></div>
      <div className="box">
        {people.map((person) => {
          const {
            uid,
            avatar,
            first_name,
            last_name,
            employment: { title },
          } = person;
          return (
            <Profile
              key={uid}
              avatar={avatar}
              first_name={first_name}
              last_name={last_name}
              title={title}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
