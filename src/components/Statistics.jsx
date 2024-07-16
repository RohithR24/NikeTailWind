import React from 'react'
import {statistics} from "../constants/index";

const Statistics = () => {
  return (
    <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((item, index) => (
            <div key={index}>
                <p className='font-palanquin text-4xl font-bold'>{item.value}</p>
                <p className='leading-7 font-montserrat text-slate-600'>{item.label}</p>
            </div>
        ))}
    </div>
  )
}

export default Statistics