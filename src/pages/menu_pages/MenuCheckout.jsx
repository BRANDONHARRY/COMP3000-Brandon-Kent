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

        let dataArry = [];

        for (let i = 0; i < length; i++) {
            dataArry[i] = <>
                <motion.div className="menu-items"
                            key={dataArry[i]}
                            variants={itemContainer}
                            transition={{ delay: i * 0.2 }}
                >
                    <img src={localStorageData[i].img} alt="image" />
                    <motion.div className="item-content">
                        <motion.div className="item-title-box">
                            <motion.h5 className="item-title">{localStorageData[i].name}</motion.h5>
                            <motion.h5 className="item-price">{localStorageData[i].price}</motion.h5>
                        </motion.div>
                        <motion.p className="item-desc">{localStorageData[i].description}</motion.p>
                    </motion.div>
                </motion.div>
            </>
        }

        let display = [
            <> <button id="emptyCartBtn" onClick={() => clearCart()}>Clear the cart.</button> </>, 
            dataArry
        ]

        return dataArry;
    }

    function displayButton(){
        let display = [
            <> <button id="emptyCartBtn" onClick={() => clearCart()}>Clear the cart.</button> </>, 
            
        ]

        return display;
    }

    // return (
    //     <>
    //     {checkout && 
    //     items
    //         .map((item) => (
    //             getItems()
    //             // displayButton()
    //         ))
    //         }
    //         {
    //             displayButton()
    //         }

    //     </>
    // )

    return (
        <>
            {getItems()}
            {displayButton()}
        </>
    ) ;

};

export default MenuCheckout;