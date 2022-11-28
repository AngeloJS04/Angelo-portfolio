import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../../public/assets/images/web.json';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className='sections heroSection'id='home'>

            <div className='introduction' >
                <div>
                    <span className='HiThere' style={{ color: '#ea6b3e' }}>Hi there, I'm </span>
                    <motion.h1 whileInView={{ x: ["50%", "0%"], opacity: [0, 0.5, 1] }} className='myName'>Angelo Paredes.</motion.h1>
                    <motion.span whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}>
                        <p className='profession'>Systems Engineer - Web Developer.</p>
                        <p className='textSecondary'>
                            I'm a Systems engineer from Dominican Republic
                            with a passion for creating<br />
                            beautiful and functional websites,
                            specializing in building <br /> exceptional digital experiences. Currently, I’m focused on building accessible web sites.
                        </p>
                    </motion.span>
                    <motion.div
                        whileInView={{ y: ["-50%", "0%"], opacity: [0, 0.5, 1] }}
                        className="contentButtoms"
                    >
                        <Link href="https://www.linkedin.com/in/angelo-paredes-861887211/" className='primaryHeroButtom' target="_blank">
                            <Image src="/assets/heroIcons/LinkedIn.svg" width={20} height={20} alt="angelo" />
                            <p style={{ marginLeft: '0.4rem' }}>LinkedIn</p>
                        </Link>
                        <Link href="https://github.com/AngeloJS04" className='grogsHeroButtom' target="_blank">
                            <Image src="/assets/heroIcons/github.svg" width={20} height={20} alt="angelo" />
                            <p style={{ marginLeft: '0.4rem' }}>GitHub</p>
                        </Link>
                    </motion.div>

                </div>
            </div>
            <div className='imageAnimated'>
                <Lottie
                    options={defaultOptions}
                    height={500}
                    width={500}
                />
            </div>

        </div>
    )
}

export default HeroSection