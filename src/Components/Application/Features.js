import React from 'react'
import { ReactComponent as Global1} from '../Img/SVG/icon-global.svg'
import { ReactComponent as Trophy1} from '../Img/SVG/icon-trophy.svg'
import { ReactComponent as Key1} from '../Img/SVG/icon-key.svg'
import { ReactComponent as Presentation1} from '../Img/SVG/icon-presentation.svg'
import { ReactComponent as Lock1} from '../Img/SVG/icon-lock.svg'
import { ReactComponent as Map1} from '../Img/SVG/icon-map.svg'

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <svg className="feature__icon">
          <Global1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Trophy1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">Only the best property</h4>
        <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
      </div> 

      <div className="feature">
        <svg className="feature__icon">
          <Map1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">Only the best property</h4>
        <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Key1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
      </div> 

      <div className="feature">
        <svg className="feature__icon">
          <Presentation1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div> 

      <div className="feature">
        <svg className="feature__icon">
          <Lock1 />
        </svg>
        <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
        <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
      </div>
    </div>
  )
}

export default Features