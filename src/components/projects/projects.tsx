import React from 'react'
import Spline from '@splinetool/react-spline';
import * as animationData from '../../../public/assets/images/touch3.json';
import Lottie from 'react-lottie';
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
            <div className='projectSection'>
                <div className='descriptionApp'>
                    <span>
                    <h2>Transport App</h2>
                        It’s a mobile app about the transportation in Santo Domingo,<br />
                        Dominican Republic. Where the user can see the bus <br /> running in real time and recharged
                        cards no matter what time.<br /> You can check the code on my
                        <a href="https://github.com/AngeloJS04/TransportRD" target={'_blank'}>github</a>.
                    </span>
                    <div>
                        <div className='tryMoveText'>(try move the phone)</div>
                        <Lottie
                            options={defaultOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                </div>

                <div className='transportCanvas'>
                    <Spline scene="https://prod.spline.design/EktYIi-4qCSOkMcT/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection