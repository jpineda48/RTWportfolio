import React from 'react'

const About = () => {
  return (
    
    <div name='about' className='w-full h-auto p-2 bg-[#c9df8a] text-black'>
      <div className='flex flex-col justify-center items-center p-9 w-full h-auto'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-2'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600'>
               
                    </p>
                </div>
                <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-2 px-4'>
                    <div className='med:text-center text-5xl font-bold'>
                        <p className=' text-center'> ABOUT<br/> ME</p>
                    </div>
                    <div>
                        <p className='fs-3 text'>
                          

                        Hi I am Jacqueline! I’m a software engineer and creative with a passion for the design process. 
                        As a software engineer I 
                        optimize creativity and technical design to create effective, efficient and user-friendly 
                        experiences. What do I love most about being a software engineer? The endless learning, creativity and problem solving!
                        <br/>
                        <br/>
                        When I am not coding, you can find me behind a sewing machine, drafting my next clothing pattern or going for a long walk with my pup Inez.
                        </p>
                    </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
