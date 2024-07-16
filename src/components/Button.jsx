import React from 'react'

const Button = ({title, imgURL}) => {
  return (
        <button className='flex justify-center border items-center px-10 gap-2 text-white bg-orange-600 py-4 font-montserrat leading-normal text-xl rounded-full'>
          {title}
          <img className="bg-white rounded-full"src={imgURL} />
      </button>
  )
}

export default Button