import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#edda78] flex justify-center items-center m-4' >
      <form method='POST' action="https://getform.io/f/5a30c846-a840-4e5c-80a5-8ad728d91268" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
        <p className=' text-center med:text-center text-5xl font-bold pt-9'> CONTACT</p>
        <br/>
            <p className='text-black py-4'>Get in touch  below or contact me via email - jacquelinepineda48@gmail.com</p>
        </div>
        <input className= 'my-4 p-2 bg-white' type="text" placeholder='name' name='name' />
        
        <input className='my-4 p-2 bg-white' type="text" placeholder='email' name='email' />
        <textarea className=  'my-4 p-2 bg-white' name="message"  rows="6" placeholder='Message'></textarea>
        <button className='text-black border-2 border-black hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact
