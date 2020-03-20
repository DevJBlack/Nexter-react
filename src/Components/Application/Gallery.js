import React from 'react'
import gal1 from '../Img/gal-1.jpeg'
import gal2 from '../Img/gal-2.jpeg'
import gal3 from '../Img/gal-3.jpeg'
import gal4 from '../Img/gal-4.jpeg'
import gal5 from '../Img/gal-5.jpeg'
import gal6 from '../Img/gal-6.jpeg'
import gal7 from '../Img/gal-7.jpeg'
import gal8 from '../Img/gal-8.jpeg'
import gal9 from '../Img/gal-9.jpeg'
import gal10 from '../Img/gal-10.jpeg'
import gal11 from '../Img/gal-11.jpeg'
import gal12 from '../Img/gal-12.jpeg'
import gal13 from '../Img/gal-13.jpeg'
import gal14 from '../Img/gal-14.jpeg'

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery_item gallery__item--1">
        <img src={gal1} alt="Gallery 1" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--2">
        <img src={gal2} alt="Gallery 2" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--3">
        <img src={gal3} alt="Gallery 3" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--4">
        <img src={gal4} alt="Gallery 4" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--5">
        <img src={gal5} alt="Gallery 5" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--6">
        <img src={gal6} alt="Gallery 6" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--7">
        <img src={gal7} alt="Gallery 7" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--8">
        <img src={gal8} alt="Gallery 8" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--9">
        <img src={gal9} alt="Gallery 9" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--10">
        <img src={gal10} alt="Gallery 10" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--11">
        <img src={gal11} alt="Gallery 11" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--12">
        <img src={gal12} alt="Gallery 12" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--13">
        <img src={gal13} alt="Gallery 13" className="gallery__img"/>
      </figure>
      
      <figure className="gallery_item gallery__item--14">
        <img src={gal14} alt="Gallery 14" className="gallery__img"/></figure>

    </section>
  )
}

export default Gallery