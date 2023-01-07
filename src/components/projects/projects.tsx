import React from 'react'
import Spline from '@splinetool/react-spline';
import * as animationData from '../../../public/assets/images/touch3.json';
import Lottie from 'react-lottie';
import Box from '../app/projectsBox';

const ProjectsSection = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div className='sections' id='projects'>
            <h2 className='h2-about ' style={{display:'block', textAlign:'center'}}>Projects</h2>
            <div className='projectSection'>
                <Box
                    title='Transport App'
                    description={
                        `It’s a mobile app about the transportation in Santo Domingo,
                        Dominican Republic. Where the user can see the bus running in real time and recharged
                        cards no matter what time. You can check the code on my
                     `
                    }
                    repo={`TransportRD`}
                    technologies={`React Native - TypeScript - Firebase - Redux Toolkit - styled-components`}
                />

                {/* <div className='descriptionApp'>
                    <span>
                        <h2>Transport App</h2>
                        It’s a mobile app about the transportation in Santo Domingo,<br />
                        Dominican Republic. Where the user can see the bus <br /> running in real time and recharged
                        cards no matter what time.<br /> You can check the code on my
                        <a href="https://github.com/AngeloJS04/TransportRD" target={'_blank'}>github</a>.
                        <p>React Native - TypeScript - Firebase - Redux Toolkit - styled-components </p>
                    </span>
                    <div>
                        <div className='tryMoveText'>(try move the phone)</div>
                        <Lottie
                            options={defaultOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                </div> */}
                <div className='transportCanvas'>
                    <Spline scene="https://prod.spline.design/EktYIi-4qCSOkMcT/scene.splinecode" />
                </div>

                
            </div>
            
            {/* <div className="projectSection">
            <Box
                    title='Transport App'
                    description={
                        `It’s a mobile app about the transportation in Santo Domingo,
                        Dominican Republic. Where the user can see the bus running in real time and recharged
                        cards no matter what time. You can check the code on my
                     `
                    }
                    repo={`TransportRD`}
                    technologies={`React Native - TypeScript - Firebase - Redux Toolkit - styled-components`}
                />
                <div className='transportCanvas'>
                <Spline scene="https://prod.spline.design/7wqR69FS6Sg9PySC/scene.splinecode" />
                </div>

            </div> */}
        </div>
    )
}

export default ProjectsSection