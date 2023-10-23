import React from 'react'

const Animate = () => {
    const line1= "and the abyss also"
    const line2 = "gazes into you...."
    const sentence = {
        hidden: {opacity:1},
        visible: {
            opacity:1,
            transition: {
                delay:0.5,
                staggerChildren:0.08,
            },

        },
    }
    const letter = {
        hidden: {opacity:0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
        },
    }
  return (
    <div>
       <motion.h3 className='load-screen--message'
       varients={sentence} initial='hidden' animate='visible'>
        {line1.split("").map((char, index) => {
            return (
                <span key ={char + "-" + index} varients={letter}>
                    {char}

                </span>
            )
        })}


       </motion.h3>
      
    </div>
  )
}

export default Animate
