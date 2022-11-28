import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../../public/assets/images/touch3.json';

const Box = ({ title, description, technologies, repo }: any) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div className='descriptionApp'>
            <span>
                <h2>{title}</h2>
                {description}
                <a href={`https://github.com/AngeloJS04/${repo}`}target={'_blank'}>github</a>
                <p>{technologies}</p>
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
    )
}

export default Box