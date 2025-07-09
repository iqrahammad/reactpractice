import React from 'react'
import { Slide } from 'react-slideshow-image'
import Slideshow from '../components/Slidershow'


const Home = () => {
  return (

    <>
      <div>
        <Slideshow/>

        <div id='content' className='m-2.5 text-center  '>
          <div id='heading' className='text-3xl'>
            <h1>Home</h1>
          </div>
          <div id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore ipsam doloremque quis nulla dolores optio illo quisquam nesciunt, minus laboriosam vel veniam vero libero commodi labore perspiciatis ipsum temporibus quasi autem odit illum ad. Et nobis, sequi amet sunt nihil iusto neque molestias enim, nam ipsam ea beatae nostrum!</div>
        </div>

      </div>
    </>
  )
}

export default Home
