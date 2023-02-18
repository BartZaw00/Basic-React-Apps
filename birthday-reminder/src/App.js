import { useState } from 'react';
import Birthday from './Birthday'

function App() {
  const birthdayTable = [
    {
      id: 1,
      name: 'Hester Hagan',
      age: 29,
      img_url: 'https://images.pexels.com/photos/4992382/pexels-photo-4992382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'James Nolan',
      age: 31,
      img_url: 'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Antonio Luka',
      age: 37,
      img_url: 'https://images.pexels.com/photos/3612409/pexels-photo-3612409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Harvey Aunt',
      age: 35,
      img_url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'Alex Morgan',
      age: 22,
      img_url: 'https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'Sean Walsh',
      age: 25,
      img_url: 'https://images.pexels.com/photos/15173983/pexels-photo-15173983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 7,
      name: 'Lola Gardner',
      age: 27,
      img_url: 'https://images.pexels.com/photos/3779078/pexels-photo-3779078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  const [birthdays, setBirthdays] = useState(birthdayTable);

  console.log(birthdays)

  return (
    <div id="main-container">
      <div className="birthday-card">
        <h2>{birthdays.length} birthdays today</h2>
        <div className="birthdays">
          {
            birthdays.map((item) => {
              return <Birthday key={item.id} birthday={item} />
            })}
        </div>
        <button className="btn" onClick={() => setBirthdays([])}>Remove all</button>
      </div>
    </div>
  );
}

export default App;
