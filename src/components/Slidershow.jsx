import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  flex: 1,
 alignItems: 'center',
  justifyContent: 'center',
  color: '#000000'
}


const divStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: './image.jpg',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500',
    showShopLink: true
  },
  {
    url: './image2.jpg',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
    ,showShopLink: true
},
  {
    url: './image3.jpg',
    showShopLink: true,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide arrows='true'>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                <span style={spanStyle}>
                  {slideImage.caption}
                  {slideImage.showShopLink && (
                    <Link to='/' className='bg-amber-400 hover:bg-amber-800 text-amber-50 p-2 rounded' style={{ marginLeft: '10px' }}>
                      Shop Now
                    </Link>
                  )}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slideshow;