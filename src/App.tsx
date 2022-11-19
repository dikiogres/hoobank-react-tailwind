import React from 'react'
import style from './style'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-primary ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          Navbar
        </div>
      </div>

    </div>
  )
}

export default App