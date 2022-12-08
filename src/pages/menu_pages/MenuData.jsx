import drinkImage from "../images/drink.svg";
import lunchImage from "../images/lunch.svg";

const menuData = [
    {
        id: 1,
        name: "Water",
        category: "drinks",
        price: 0.70,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et volutpat ipsum, in pellentesque nulla.',
        img: drinkImage,
    },
    {
        id: 2,
        name: "Coke",
        category: "drinks",
        price: 2.50,
        description: 'Quisque tincidunt ex quis quam finibus mattis. Proin fermentum tortor ac turpis ornare, ut lacinia neque vulputate. Fusce gravida posuere ipsum',
        img: drinkImage,
    },
    {
        id: 3,
        name: "Lemonade",
        category: "drinks",
        price: 3.20,
        description: 'vel dignissim arcu pellentesque eu. In mollis mauris sapien, at porta felis cursus nec. Donec a placerat ligula. Aenean semper ornare orci, vitae sollicitudin odio ullamcorper quis',
        img: drinkImage,
    },
    {
        id: 4,
        name: "Burger & fries",
        category: "lunch",
        price: 10,
        description: 'Donec tristique mauris ornare massa sagittis tempor eu ut lorem. Etiam dapibus tincidunt neque in tempus.',
        img: lunchImage,

    },
    {
        id: 5,
        name: "Pizza",
        category: "lunch",
        price: 7.99,
        description: 'Nam nulla ex, aliquam vitae velit sed, tempus feugiat ex. Morbi convallis dui id orci convallis condimentum.',
        img: lunchImage,

    },
    {
        id: 6,
        name: "Chicken Tikka",
        category: "lunch",
        price: 13.50,
        description: 'Integer non ullamcorper augue. Nulla facilisi. Phasellus quis elit nec velit ornare euismod.',
        img: lunchImage,
    },
];

export default menuData;