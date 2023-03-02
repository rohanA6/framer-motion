import React from "react";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

// Animation
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type:"spring",
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4 
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};


const Order = ({ pizza, setModal }) => {

  useEffect(()=>{
    setTimeout(() => {
      setModal(true)
    }, 5000)
  }, [setModal])

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <m.p variants={childVariants}>You ordered a {pizza.base} pizza with:</m.p>
      <m.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </m.div>
    </m.div>
  );
};

export default Order;
