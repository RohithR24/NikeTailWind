import React from 'react'

const Button = ({title, imgURL}) => {
  return (
        <button className='flex justify-center items-center px-07 py-04 text-lg gap-2 text-white bg-orange-600 py-2 px-2 font-montserrat leading-normal text-lg rounded-full'>
          {title}
          <img className="bg-white rounded-full"src={imgURL} />
      </button>
  )
}

export default Button