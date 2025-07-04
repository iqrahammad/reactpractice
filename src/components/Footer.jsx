import React from 'react'

const Footer = () => {
  return (
    <>
    <div id='deskto-footer' className='bg-amber-700 flex justify-around'>
    <div className=' grid-cols-3 md:grid-cols-5 gap-29 grid p-10'>
    <div id='pages'>
      <h2 className="font-bold text-lg mb-2">Social Media Links</h2>
      <ul id='list-items ' className='text-center'>
        <li><i class="ri-facebook-fill">Facebook</i></li>
        <li><i class="ri-instagram-line">Instagram</i></li>
        <li><i class="ri-google-fill">Google</i></li>
        <li><i className='ri-instagram-line'>LinkedIn</i></li>
        <li><i className='ri-twitter-fill'>Twitter</i></li>
        <li><i className='ri-chat-3-fill'>WatsApp</i></li>

      </ul>

    </div>
    <div id="contactnumber">
    <h2 className="font-bold text-lg mb-2">Contact</h2>
            <p>+92 300 1234567</p>
            <p>+92 345 9876543</p>
    </div>
    <div id='office address'>
    <h2 className="font-bold text-lg mb-2">Office</h2>
            <p>123 Business Street</p>
            <p>Lahore, Pakistan</p>
    </div>
    <div id='faq-question'>
    <h2 className="font-bold text-lg mb-2">FAQ</h2>
            <p>Shipping Info</p>
            <p>Returns & Refunds</p>
            <p>Support</p>
    </div>
    <div id='map-location'>
      
    </div>
    </div>
      </div>
      </>
  )
}

export default Footer

