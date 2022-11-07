import { motion } from "framer-motion";


const MenuCheckout = ({ checkout, items}) => {
        const itemContainer = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };


    return (
        <>
            {checkout &&
                items
                .filter((item) => item.category === "checkout")
                .map((item, i) => (
                    <motion.div
                        className="menu-items"
                        key={item.id}
                        variants={itemContainer}
                        transition={{ delay: i * 0.2}}
                    >
                        <img src={item.img} alt="checkout item" />
                        <motion.div className="item-content">
                            <motion.div className="item-title-box">
                                <motion.h5 className="item-title">{item.name}</motion.h5>
                                <motion.h5 className="item-price">${item.price}</motion.h5>
                                
                            </motion.div>
                            <motion.p className="item-desc">{item.description}</motion.p>
                        </motion.div>
                    </motion.div>
            ))}
        </>
    );
};

export default MenuCheckout;

