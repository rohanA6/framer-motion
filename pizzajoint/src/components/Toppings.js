import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

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
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: " 0px 0px 8px rgb(255, 255, 255)",
    boxShadow: " 0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <m.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </m.li>
          );
        })}
      </ul>

      <Link to="/order">
        <m.button variants={buttonVariants} whileHover="hover">
          Order
        </m.button>
      </Link>
    </m.div>
  );
};

export default Toppings;
