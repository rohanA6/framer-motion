import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

//Animation
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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit:{
    x: "-100vh",
    transition: {ease: 'easeInOut'}
  }
};

const Home = () => {
  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <m.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </m.button>
      </Link>
    </m.div>
  );
};

export default Home;
