import React from 'react'

const Button = ({styles}: {styles?:any}) => {
  return (
    <div className={`rounded-lg shadow-cyan-500/50 hover:shadow-cyan-500/50 shadow-lg transition duration-500 hover:shadow-xl hover:scale-110 ${styles} `}>
        <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-lg font-poppins font-medium text-[18px] text-primary outline-none `}>
            Get Started
        </button>
    </div>
  )
}

export default Button