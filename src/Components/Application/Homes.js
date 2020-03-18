import React from 'react'
import house1 from '../Img/house-1.jpeg'
import { ReactComponent as Heart } from '../Img/SVG/heart-full.svg'
import { ReactComponent as Map } from '../Img/SVG/icon-map.svg'

const Homes = () => {
  return (
    <div className="homes">
      <div className="home">
        <img src={house1} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
        <svg className="home__like">
          <Map />
        </svg>
        </div>
      </div>

      <div className="home">Home card 2</div>

      <div className="home">Home card 3</div>

      <div className="home">Home card 4</div>

      <div className="home">Home card 5</div>

      <div className="home">Home card 6</div>
    </div>
  )
}

export default Homes