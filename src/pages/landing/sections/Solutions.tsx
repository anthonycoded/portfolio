import React from 'react';
import cart from '../../../assets/shopping-cart.svg';
import content from '../../../assets/content.svg';
import payments from '../../../assets/credit-card.svg';
import stats from '../../../assets/stats.svg';
import orderfood from '../../../assets/order-food.svg';
import socialmedia from '../../../assets/social-media.svg';
import chat from '../../../assets/speech-bubble.svg';
import authentication from '../../../assets/authentication.svg';
import { motion, Variants } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    { name: 'E-Commerce', icon: cart },
    { name: 'Content Management', icon: content },
    { name: 'Payment Processing', icon: payments },
    { name: 'Mobile Ordering', icon: orderfood },
    { name: 'Analytics', icon: stats },
    { name: 'Social Media', icon: socialmedia },
    { name: 'Instant Messaging', icon: chat },
    { name: 'Authentication', icon: authentication },
  ];
  return (
    <div
      id="solutions"
      className="h-4/5  w-full flex flex-col items-center bg-material-purple p-4 md:py-4 pb-12"
    >
      <div className="w-full h-full flex flex-col items-center lg:w-5/6 xl:w-4/5">
        <p className="text-2xl  font-semibold text-left mb-4 w-full text-white">
          Online Solutions
        </p>
        <div className="w-full  grid grid-cols-2 justify-content-center gap-12  ">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={item.icon} alt="" className="h-14"></img>
              <p className="text-center text-xl  text-white ">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
