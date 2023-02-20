import { useEffect, useState } from "react";
import Tour from "./Tour";

function App() {
  const toursTable = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Best Of Paris In 7 Days Tour',
      price: 1995,
      description: 'Experience the best of Paris in just one week! Visit the Eiffel Tower, the Louvre Museum, and many other famous attractions. Paris is a beautiful city with so much to see and do. You will love exploring its charming neighborhoods, savoring its delicious food, and soaking up its vibrant culture. This tour is the perfect way to experience all that Paris has to offer.'
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'New York City Explorer',
      price: 2595,
      description: 'Explore the Big Apple with our expert guides. See the Statue of Liberty, Central Park, Times Square, and more! New York is one of the most exciting cities in the world, and this tour will take you to all of its top attractions. You will also have the opportunity to discover some of the city\'s hidden gems and local favorites. Whether you\'re a first-time visitor or a seasoned traveler, this tour is not to be missed.'
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'London Highlights Tour',
      price: 1795,
      description: 'Discover the highlights of London in just a few days. Visit Buckingham Palace, the Tower of London, and many other iconic landmarks. London is a city of contrasts, with a rich history and a vibrant modern culture. This tour will show you the best of both worlds, from the city\'s ancient past to its exciting present. You will also have the chance to explore some of London\'s hidden gems and local neighborhoods.'
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/5707602/pexels-photo-5707602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'The Ultimate Australian Adventure',
      price: 2995,
      description: 'Embark on an adventure of a lifetime in Australia! See the Great Barrier Reef, Uluru, and explore the rugged Outback. Australia is a land of natural wonders and breathtaking landscapes. This tour will take you to some of the country\'s most iconic destinations, as well as some lesser-known gems. You will also have the chance to experience Australia\'s unique culture and cuisine.'
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/96932/pexels-photo-96932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Asian Delights',
      price: 2495,
      description: "Experience the best of Asia with our expert guides. Visit Tokyo, Seoul, Bangkok, and many other exciting destinations! Immerse yourself in the unique cultures of each country, savor the delicious food, and see the stunning natural and architectural landmarks. In Japan, you'll get to witness the bustling energy of Tokyo and the peaceful serenity of Kyoto.In Seoul, explore the city's ancient history and modern innovations. Bangkok, Thailand's vibrant capital, offers a feast for the senses with its colorful markets and exotic cuisine.And that's just the beginning - this tour will take you on an unforgettable journey through some of the most fascinating and diverse regions of Asia. Book now and start planning your adventure!"
    }
  ]

  const [tours, setTours] = useState(toursTable);

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
            return <Tour key={item.id} {...item} onButtonClick={handleToursStateChange} />
          })
        }
      </div>
      <footer><a id="credits" href="https://github.com/BartZaw00" target="_blank">Created By <span>Bartosz
        Zawadka</span></a></footer>
    </div>
  );
}

export default App;
