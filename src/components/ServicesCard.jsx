import React from 'react'

const ServicesCard = ({title,
    imgURL,
    text}) => {
  return (
    <div>
         <img src={imgURL} alt={title} width={24} height={24} />
        <span>{title}</span>
        <span>{text}</span>
    </div>
  )
}

export default ServicesCard