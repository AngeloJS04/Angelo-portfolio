import React, { useEffect } from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../../public/assets/images/web.json';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import UseGetWindowsSize from '../../hooks/useGetWindowsSize';

const HeroSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const widthWindow = UseGetWindowsSize()
    const [sizes, setSizes] = React.useState({ width: 0, height: 0 })
    const [effect, setEffect] = React.useState(['50%', '0%'])


    useEffect(() => {
        if (widthWindow === 0) return;
        if (widthWindow < 768) {
            setSizes({ width: 0, height: 0 })
        } else if (widthWindow < 1024) {
            setSizes({ width: 300, height: 300 })
            setEffect(['0%', '0%'])
        } else {
            setSizes({ width: 500, height: 500 })
        }
    }, [widthWindow])


    return (
        <div className='sections heroSection' id='home' style={{ height: '100vh' }}>

<div className='introduction' >
                <div>
                    <span className='HiThere' style={{ color: '#ea6b3e' }}>Hi there, I'm </span>
                    <h1 className='myName'>Angelo Paredes.</h1>
                    <span>
                        <p className='profession'>Systems Engineer - Web Developer.</p>
                        <p className='textSecondary'>
                            I'm a Systems engineer from Dominican Republic
                            with a passion for creating
                            beautiful and functional websites,<br />
                            specializing in building  exceptional digital <br />experiences. Currently, I’m focused on building accessible web sites.
                        </p>
                    </span>
                    <div
                      
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
                    </div>

                </div>
            </div>
            <div className='imageAnimated'>
                <Lottie
                    options={defaultOptions}
                    height={sizes.height}
                    width={sizes.width}
                />
            </div>

        </div>
    )
}

export default HeroSection