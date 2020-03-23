import React from 'react'
import realtor1 from '../Img/realtor-1.jpeg'
import realtor2 from '../Img/realtor-2.jpeg'
import realtor3 from '../Img/realtor-3.jpeg'

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img src={realtor1} alt="Realtor One" className="realtors__img"/>
        <div className="realtor__details">
          <h4 className="heading-4 heading-4--light">Erik Felman</h4>
          <p className="realtors__sold">245 Houses</p>
        </div>

        <img src={realtor2} alt="Realtor Two" className="realtors__img"/>
        <div className="realtor__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 Houses</p>
        </div>

        <img src={realtor3} alt="Realtor Threes" className="realtors__img"/>
        <div className="realtor__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">198 Houses</p>
        </div>
      </div>
    </div>
  )
}

export default Realtors