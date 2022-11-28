
import { motion } from 'framer-motion';
import Image from 'next/image';
import phone from '../../../public/assets/images/code.json';
import { technologies } from '../../settings/technologies.settings';


const AboutSection = () => {

  return (
    <div id='about' className='sections'>
      <div className='aboutSection'>
        <motion.div whileInView={{ x: ["-100%", "0%"], opacity: [0, 0.5, 1] }}>
        </motion.div>
        <div className='my_skills'>
          <div className='mySelf'>
            <h2 className='h2-about'>About Me</h2>
            <p>
              I'm a Systems engineer from Dominican Republic, graduated from OYM University.<br />
              with 1+ year of experience in web development, I have worked with different<br />
              technologies such as React, Next.js, React Native, Node.js, JavaScript, TypeScript,<br />
              HTML, CSS, Redux, Vite, Git, Firebase, and more.
            </p>
          </div>
          <span className='spanSkill'>Skills</span>
          <div className='technologies'>

            {
              technologies.map((technology, index) => (
                <motion.div key={index} whileInView={{ x: ["-100%", "0%"], opacity: [0, 0.5, 1] }} >
                  <Image src={technology.icon} alt={technology.name} width={19} height={19} />
                  <span>{technology.name}</span>
                </motion.div>
              ))

            }
          </div>
        </div>
        <motion.div whileInView={{ x: ["100%", "0%"], opacity: [0, 0.5, 1] }} className='' >
          <Image src={'/assets/images/unnamed.jpg'} className='MePhoto' width={300} height={400} alt={'Angelo-paredes'} />
        </motion.div>

      </div>
    </div>
  )
}

export default AboutSection