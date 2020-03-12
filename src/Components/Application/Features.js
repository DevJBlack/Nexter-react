import React from 'react'
import { ReactComponent as Sprit1} from '../Img/SVG/heart-full.svg'

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <svg className="feature__icon">
          <Sprit1 />
        </svg>
      </div>
      <div className="feature">feature 2</div>
      <div className="feature">feature 3</div>
      <div className="feature">feature 4</div>
      <div className="feature">feature 5</div>
      <div className="feature">feature 6</div>
    </div>
  )
}

export default Features