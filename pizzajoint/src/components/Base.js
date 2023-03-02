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
  exit:{
    x: "-100vh",
    transition: {ease: 'easeOut'}
  }
};

const nextVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
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

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <m.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112",
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </m.li>
          );
        })}
      </ul>

      {pizza.base && (
        <m.div variants={nextVariants} className="next">
          <Link to="/toppings">
            <m.button variants={buttonVariants} whileHover="hover">
              Next
            </m.button>
          </Link>
        </m.div>
      )}
    </m.div>
  );
};

export default Base;
