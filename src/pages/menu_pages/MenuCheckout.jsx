import { motion } from "framer-motion";


const MenuCheckout = ({ checkout, items}) => {
        const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    function clearCart(){
        localStorage.clear();

        console.log(localStorage);
    }

    let length = 0

    function getItems(){
        let localStorageData = JSON.parse(localStorage.getItem("items"));
        
        if(localStorageData == null){} else{length = localStorageData.length;}

        let id = [];
        let img = [];
        let name = [];
        let price = [];
        let desc = [];
        let i = 0
        
        for (i = 0; i < length; i++){
            id[i] = localStorageData[i].id;
            img[i] = localStorageData[i].img;
            name[i] = localStorageData[i].name;
            price[i] = localStorageData[i].price;
            desc[i] = localStorageData[i].description;
        }

        for(let i = 0; i < length; i++){
            return(
                <>
                <motion.div>
                    <motion.h5>Test</motion.h5>
                </motion.div>
                </>
            );
        }

        let data = 
        <>
        <button id="emptyCartBtn" onClick={() => clearCart()}>Clear the cart.</button>

        
        <motion.div className="menu-items">
            <img src={img[0]} alt="image" />
            <motion.div className="item-content">
                <motion.div className="item-title-box">
                    <motion.h5 className="item-title">{name[0]}</motion.h5>
                    <motion.h5 className="item-price">{price[0]}</motion.h5>
                    
                </motion.div>
                <motion.p className="item-desc">{desc[0]}</motion.p>
            </motion.div>
        </motion.div>

        {/* <motion.div>
            {name}
            {price}
            {desc}
        </motion.div> */}
        
        </>

        // return data;
    }

    return (getItems()) ;
};

export default MenuCheckout;