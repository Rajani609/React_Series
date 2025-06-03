import React from 'react'

// import rajniProfilePic from '../assets/rajni_profile_pic.jpg'
// import image from '../assets/image.png'
// import image2 from '../assets/rWIN_20250412_10_44_05_Pro.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='main-container'>
        <h2 id='name'>{props.name}</h2>
        <img  id='profile-pic' src={props.image} alt="girl" />
        <p id='title'>{props.desc}</p>
    </div>
  )
}

export default UserCard