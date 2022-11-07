import drinkImage from "../images/drink.svg";
import lunchImage from "../images/lunch.svg";

const menuData = [
    {
        id: 1,
        name: "Water",
        category: "drinks",
        price: 0.70,
        description: 'Bottle of water.',
        img: drinkImage,
    },
    {
        id: 2,
        name: "Coke",
        category: "drinks",
        price: 2.50,
        description: 'Pint of coke.',
        img: drinkImage,
    },
    {
        id: 3,
        name: "Lemonade",
        category: "drinks",
        price: 93.5,
        description: 'Unlimited lemonade.',
        img: drinkImage,
    },
    {
        id: 4,
        name: "Burger & fries",
        category: "lunch",
        price: 10,
        description: 'Burger with salad and side of fries',
        img: lunchImage,

    },
    {
        id: 5,
        name: "Pizza",
        category: "lunch",
        price: 7.99,
        description: 'Pizza with 3 toppings of your choice',
        img: lunchImage,

    },
    {
        id: 6,
        name: "Chicken Tikka",
        category: "lunch",
        price: 13.50,
        description: 'Hot & Spicy!!!',
        img: lunchImage,
    },
    {
        id: 7,
        name: "Chicken Tikka",
        category: "checkout",
        price: 13.50,
        description: 'Hot & Spicy!!!',
        img: lunchImage,
    },
];

export default menuData;