import { useEffect, useState } from "react";
import Tour from "./Tour";

function App() {
  const toursTable = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Best Of Paris In 7 Days Tour',
      price: 1995,
      description: 'Experience the best of Paris in just one week! Visit the Eiffel Tower, the Louvre Museum, and many other famous attractions.',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'New York City Explorer',
      price: 2595,
      description: 'Explore the Big Apple with our expert guides. See the Statue of Liberty, Central Park, Times Square, and more!',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'London Highlights Tour',
      price: 1795,
      description: 'Discover the highlights of London in just a few days. Visit Buckingham Palace, the Tower of London, and many other iconic landmarks.',
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/5707602/pexels-photo-5707602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Ultimate Australian Adventure',
      price: 2995,
      description: 'Embark on an adventure of a lifetime in Australia! See the Great Barrier Reef, Uluru, and explore the rugged Outback.',
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/96932/pexels-photo-96932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Asian Delights',
      price: 2495,
      description: 'Experience the best of Asia with our expert guides. Visit Tokyo, Seoul, Bangkok, and many other exciting destinations!',
    }
  ]

  const [tours,setTours] = useState(toursTable);

  function handleToursStateChange(id) {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  }

  return (
    <div id="container">
      <h1>Tours App</h1>
      <div id="tours">
       {
        tours.map((item) => {
          return <Tour key={item.id} tour={item} onButtonClick={handleToursStateChange}/>
        })
       }
      </div>
      <footer><a id="credits" href="https://github.com/BartZaw00" target="_blank">Created By <span>Bartosz
        Zawadka</span></a></footer>
    </div>
  );
}

export default App;
