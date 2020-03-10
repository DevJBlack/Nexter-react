import React from 'react'
import '../sass/App.scss'

import Sidebar from './Sidebar'
import Header from './Header'
import Realtors from './Realtors'
import Features from './Features'
import StoryPictures from './StoryPictures'
import StoryContent from './StoryContent'
import Homes from './Homes'
import Gallery from './Gallery'
import Footer from './Footer'


const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App