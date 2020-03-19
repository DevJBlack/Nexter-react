import React from 'react'
import house1 from '../Img/house-1.jpeg'
import house2 from '../Img/house-2.jpeg'
import house3 from '../Img/house-3.jpeg'
import house4 from '../Img/house-4.jpeg'
import house5 from '../Img/house-5.jpeg'
import house6 from '../Img/house-6.jpeg'
import { ReactComponent as Heart } from '../Img/SVG/heart-full.svg'
import { ReactComponent as Map } from '../Img/SVG/icon-map.svg'
import { ReactComponent as Male } from '../Img/SVG/icon-male.svg'
import { ReactComponent as Expand } from '../Img/SVG/icon-expand.svg'
import { ReactComponent as Key } from '../Img/SVG/icon-key.svg'

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
          <p>USA</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>5 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>325 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>1,200,00</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>



      <div className="home">
        <img src={house2} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Modern Glass Villa</h5>      
        <div className="home__location">
          <svg className="home__like">
            <Map />
          </svg>
          <p>Canada</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>6 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>450 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>2,750,000</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>



      <div className="home">
        <img src={house3} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <svg className="home__like">
            <Map />
          </svg>
          <p>UK</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>4 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>250 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>850,000</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>



      <div className="home">
        <img src={house4} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <svg className="home__like">
            <Map />
          </svg>
          <p>Portugal</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>6 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>480 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>1,950,000</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>



      <div className="home">
        <img src={house5} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <svg className="home__like">
            <Map />
          </svg>
          <p>USA</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>10 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>4250 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>9,500,000</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>



      <div className="home">
        <img src={house6} alt="House One" className="home__img"/>
        <svg className="home__like">
          <Heart />
        </svg>
        <h5 className="home__name">Modern Family Apartment</h5>
        <div className="home__location">
          <svg className="home__like">
            <Map />
          </svg>
          <p>Italy</p>
        </div>

        <div className="home__room">
          <svg className="home__like">
            <Male />
          </svg>
          <p>3 Rooms</p>
        </div>

        <div className="home__area">
          <svg className="home__like">
            <Expand />
          </svg>
          <p>100 m <sup>2</sup></p>
        </div>

        <div className="home__price">
          <svg className="home__like">
            <Key />
          </svg>
          <p>800,00</p>
        </div>
        <button className="cta">Contact Realtor</button>
      </div>
    </div>
  )
}

export default Homes