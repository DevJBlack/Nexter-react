import React from 'react'
import story1 from '../Img/story-1.jpeg'
import story2 from '../Img/story-2.jpeg'

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      <img src={story1} alt="Couple with new House" className="story__img--1"/>
      <img src={story2} alt="New House" className="story__img--2"/>
    </div>
  )
}

export default StoryPictures