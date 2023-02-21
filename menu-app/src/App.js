import { useEffect, useState } from "react";
import { Categories } from "./Categories";
import MenuItem from "./MenuItem";

function App() {
  const menuArray = [
    {
      id: 1,
      category: "lunch",
      name: "Polish Duck",
      price: "$17.99",
      image:
        "https://images.pexels.com/photos/15478004/pexels-photo-15478004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id1.",
    },
    {
      id: 2,
      category: "dessert",
      name: "Brownie in chocolate sauce",
      price: "$7.99",
      image:
        "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id8.",
    },
    {
      id: 3,
      category: "lunch",
      name: "Italian Chicken",
      price: "$13.99",
      image:
        "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id3.",
    },
    {
      id: 4,
      category: "breakfast",
      name: "Pancakes in maple syrup",
      price: "$12.99",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id6.",
    },
    {
      id: 5,
      category: "lunch",
      name: "Prawns in cream sauce",
      price: "$19.99",
      image:
        "https://images.pexels.com/photos/236421/pexels-photo-236421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id5.",
    },
    {
      id: 6,
      category: "lunch",
      name: "Argentinian Chicken",
      price: "$13.99",
      image:
        "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id4.",
    },
    {
      id: 7,
      category: "dessert",
      name: "Fruit Dessert",
      price: "$9.99",
      image:
        "https://images.pexels.com/photos/13198281/pexels-photo-13198281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id7.",
    },
    {
      id: 8,
      category: "lunch",
      name: "Beef Ramen",
      price: "$10.99",
      image:
        "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id2.",
    },
    {
      id: 9,
      category: "breakfast",
      name: "Lard Sandwich",
      price: "$5.99",
      image:
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id9.",
    },
    {
      id: 10,
      category: "lunch",
      name: "American Steak",
      price: "$21.99",
      image:
        "https://images.pexels.com/photos/3535395/pexels-photo-3535395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id10.",
    },
  ];

  const uniqueCategories = [
    "all",
    ...menuArray.reduce((unique, item) => {
      if (!unique.includes(item.category)) {
        unique.push(item.category);
      }
      return unique;
    }, []),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [menu, setMenu] = useState(menuArray);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(menuArray);
      return;
    }
    const menuArrayFiltered = menuArray.filter(
      (item) => item.category === category
    );
    setMenu(menuArrayFiltered);
  };

  return (
    <main id="container">
      <h1 className="title">Our Menu</h1>
      <div className="title-line"></div>
      <Categories categories={categories} filterItems={filterItems} />
      <div className="menu">
        {menu.map((menuItem) => {
          return <MenuItem key={menuItem.id} item={menuItem} />;
        })}
      </div>
    </main>
  );
}

export default App;
