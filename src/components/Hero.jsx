import React from 'react'
import {Button} from './index'
import { arrowRight } from '../assets/icons';

const Hero = () => {
  return (
    <section id="home" className= "w-full xl:flex-row flex-col min-h-screen leading-normal font-montserrat justify-center gap-10 max-container border-2 border-red-500 p-2">
        
        <div className = " xl:2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
            <p className='pb-8 text-orange-600 text-xl font-montserrat'>
            Our Summer collections
            </p>

            <h1 className='text-8xl font-semibold'>
            <span>The New Arrival</span> <br/>
            <span className=' text-orange-600'>Nike</span> Shoes
            </h1>

            <p className='pb-10 pt-8 text-xl font-montserrat text-slate-600'>Discover stylish Nike arrivals, quality <br/> comfort, and innovation for your active life.</p>
            <Button className="" title="Show now" imgURL ={arrowRight}/>
        </div>
    </section>
  )
}

export default Hero;