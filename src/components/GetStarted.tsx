import React from 'react'

import styles from '../style'

import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer shadow-cyan-500/50 hover:shadow-cyan-500/50 shadow-lg transition duration-500 hover:shadow-2xl hover:scale-110`}>
        <div className={`${styles.flexCenter} flex-col bg-primary h-[100%] w-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                    <span className='text-gradient'>Get</span>
                </p>
                <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                <span className='text-gradient'>Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted