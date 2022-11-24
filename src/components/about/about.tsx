import React, { useState } from 'react'

import { useLottie, useLottieInteractivity } from "lottie-react";
import phone from '../../../public/assets/images/code.json'
import Image from 'next/image';
import { motion } from 'framer-motion';

const style = {
width: '20rem'
};

const options = {
  animationData: phone,
};

const technologies = [
  {
    name: 'React',
    icon: '/assets/heroIcons/react.svg',
  },
  {
    name: 'React Native',
    icon: '/assets/heroIcons/react.svg',
  },
  {
    name: 'Next.js',
    icon: '/assets/heroIcons/next.svg',

  },
  {
    name: 'Node.js',
    icon: '/assets/heroIcons/node.svg',
  },
  {
    name: 'JavaScript',
    icon: '/assets/heroIcons/javascript.svg',
  },
  {
    name: 'TypeScript',
    icon: '/assets/heroIcons/typescript.svg',

  },
  {
    name: 'html',
    icon: '/assets/heroIcons/html.svg',
  },
  {
    name: 'css',
    icon: '/assets/heroIcons/css.svg',
  },
  {
    name: 'redux',
    icon: '/assets/heroIcons/redux.svg',
  },
  {
    name: 'vite',
    icon: '/assets/heroIcons/vite.svg',
  },
  {
    name: 'git',
    icon: '/assets/heroIcons/git.svg',
  },
  {
    name: 'Firebase',
    icon: '/assets/heroIcons/firebase.svg',
  }

]

const AboutSection = () => {
  const Smartphone = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0, 0.2],
          type: "play",
          frames: [0]
        },

      ],
    });

    return Animation;
  };

  return (
    <div id='about' className='sections'>
   
      <div className='aboutSection'>


        <motion.div  whileInView={{ x: ["-100%", "0%"], opacity: [0, 0.5, 1] }}>
        <Smartphone/> 
        </motion.div>
        <div className='my_skills'>
          <span className='spanSkill'>Skills</span>
         <div className='technologies'>
         {
            technologies.map((technology, index) => (
              <motion.div key={index} whileInView={{ x: ["-100%", "0%"], opacity: [0, 0.5, 1] }} >
                <Image src={technology.icon} alt={technology.name} width={25} height={25} />
                <span>{technology.name}</span>
              </motion.div>
            ))

          }
         </div>
        </div>
        <motion.div whileInView={{ x: ["100%", "0%"], opacity: [0, 0.5, 1] }} >
          <Image src={'/assets/images/unnamed.jpg'} className='MePhoto' width={300} height={400} alt={'Angelo-paredes'} />
          
              

        </motion.div>

      </div>
    </div>
  )
}

export default AboutSection