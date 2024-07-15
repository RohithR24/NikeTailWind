import React from 'react'
import {Button} from './index'
import { arrowRight } from '../assets/icons';

const Hero = () => {
  return (
    <section id="home" className= "w-full xl:flex-row flex-col min-h-screen justify-center gap-10 max-container border-2 border-red-500 p-2">
        <div className = " xl:2/5 flex flex-col justify-center items-center max-xl:padding-x pt-28">
            <p >
            Our Summer collections
            </p>

            <h4>
            <span>The New Arrival</span> <br/>
            <span>Nike</span> Shoes
            </h4>

            <p className='leading-normal  font-montserrat text-slate-gray'>Discover stylish Nike arrivals, quality <br/> comfort, and innovation for your active life.</p>
            <Button className="" title="Show now" imgURL ={arrowRight}/>
        </div>
    </section>
  )
}

export default Hero;