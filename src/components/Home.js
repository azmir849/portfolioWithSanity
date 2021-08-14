import React from 'react'
import bg from '../img/bg.jpg'
export default function Home() {
    return (
       <main>
           <img
            alt='Ah'
            className='absolute object-cover w-full h-full'
             src={bg} />
          
           <section className='relative flex justify-center min-h-screen pt-12  lg:pt-64 px-8'>
               <h1 className='text-6xl text-white hundred font-bold cursive leading-none lg:leading-snug home-name '>Hello. I'm AH Naeem</h1>
           </section>
       </main>
    )
}