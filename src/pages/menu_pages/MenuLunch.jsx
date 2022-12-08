import { motion } from "framer-motion";

const MenuLunch = ({ lunch, items }) => {
    const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    let tempStorage = [];

    function addToCart(itemPicked){
        if (localStorage.getItem("items") === null){ 
            tempStorage.push(itemPicked);
            localStorage.setItem("items", JSON.stringify(tempStorage));
            
        } else {
            tempStorage = JSON.parse(localStorage.getItem("items"));
        
            tempStorage.push(itemPicked);

            localStorage.setItem("items", JSON.stringify(tempStorage));  
        }
        let localStorageData = JSON.parse(localStorage.getItem("items"));

        console.log(localStorageData);
    }


    return (
        <>
            {lunch &&
                    items
                    .filter((item) => item.category === "lunch")
                    .map((item, i) => (
                        <motion.div
                            className="menu-items"
                            key={item.id}
                            variants={itemContainer}
                            transition={{ delay: i * 0.2 }}
                        >
                            <img src={item.img} alt="food lunch" />
                            <motion.div className="item-content">
                                <motion.div className="item-title-box">
                                    <motion.h5 className="item-title">{item.name}</motion.h5>
                                    <motion.h5 className="item-price">${item.price}</motion.h5>
                                </motion.div>
                                <motion.p className="item-desc">{item.description}</motion.p>
                            </motion.div>
                        <button id="cartBtn" onClick={() => addToCart(item)}>Add to cart.</button>
                        </motion.div>
                    ))}
        </>
    );
};

export default MenuLunch;
