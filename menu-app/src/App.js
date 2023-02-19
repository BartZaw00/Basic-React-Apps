import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function App() {
  const menuArray = [
    {
      id: 1,
      category: 3,
      name: "Polish Duck",
      price: "$17.99",
      image: "https://images.pexels.com/photos/15478004/pexels-photo-15478004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id1."
    },
    {
      id: 2,
      category: 2,
      name: "Brownie in chocolate sauce",
      price: "$7.99",
      image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id8."
    },
    {
      id: 3,
      category: 3,
      name: "Italian Chicken",
      price: "$13.99",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id3."
    },
    {
      id: 4,
      category: 4,
      name: "Pancakes in maple syrup",
      price: "$12.99",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id6."
    },
    {
      id: 5,
      category: 3,
      name: "Prawns in cream sauce",
      price: "$19.99",
      image: "https://images.pexels.com/photos/236421/pexels-photo-236421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id5."
    },
    {
      id: 6,
      category: 3,
      name: "Argentinian Chicken",
      price: "$13.99",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id4."
    },
    {
      id: 7,
      category: 4,
      name: "Fruit Dessert",
      price: "$9.99",
      image: "https://images.pexels.com/photos/13198281/pexels-photo-13198281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id7."
    },
    {
      id: 8,
      category: 3,
      name: "Beef Ramen",
      price: "$10.99",
      image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id2."
    },
    {
      id: 9,
      category: 2,
      name: "Lard Sandwich",
      price: "$5.99",
      image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id9."
    },
    {
      id: 10,
      category: 3,
      name: "American Steak",
      price: "$21.99",
      image: "https://images.pexels.com/photos/3535395/pexels-photo-3535395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id10."
    },
  ]

  const [category, setCategory] = useState(1);
  const [menu, setMenu] = useState(menuArray);

  useEffect(() => {
    const menuArrayFiltered = menuArray.filter(item => item.category === category);
    setMenu(menuArrayFiltered);
  }, [category]);

  return (
    <main id="container">
      <h1 className="title">Our Menu</h1>
      <div className="title-line"></div>
      <div className="buttons">
        <button className="button" onClick={() => setCategory(1)}>All</button>
        <button className="button" onClick={() => setCategory(2)}>Breakfast</button>
        <button className="button" onClick={() => setCategory(3)}>Lunch</button>
        <button className="button" onClick={() => setCategory(4)}>Dessert</button>
      </div>
      <div className="menu">
        {
          category === 1
            ? menuArray.map((menuItem) => { return <MenuItem key={menuItem.id} item={menuItem} /> })
            : menu.map((menuItem) => { return <MenuItem key={menuItem.id} item={menuItem} /> })
        }
      </div>
    </main>
  );
}

export default App;
