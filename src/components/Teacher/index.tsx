import React from 'react'

import './styles.css'

interface TeacherProps {
  profileName?: string,
  profilePicture?: string,
  price?: string,
  descTitle?: string,
  descContent?: string
}

const Teacher: React.FC<TeacherProps> = props => {
  return (
    <div className="container">
      <div className="profile-picture">
        <img src={props.profilePicture || ""} alt="" className="profile-picture-content" />
      </div>
      <div className="content" >
        <div className="profile">
          <h3 className="profile-name-content">{props.profileName}</h3>
          <h5 className="desc-title">{props.descTitle}</h5>
        </div>
        <div className="desc">
          <p className="desc-content">{props.descContent}</p>
        </div>
        <div className="info">
          <div className="price">
            <h3 className="price-value">R$ {props.price || '20'}</h3>
          </div>
          <div className="contact">
            <h5>WHATSAPP</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher