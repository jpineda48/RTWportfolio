import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#007] flex justify-center items-center p-4' >
      <form method='POST' action="https://getform.io/f/5a30c846-a840-4e5c-80a5-8ad728d91268" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-700'>Contact</p>
            <p className='text-white py-4'>//Submit the form below or shoot me an email - jacquelinepineda48@gmail.com</p>
        </div>
        <input className= 'bg-white' type="text" placeholder='name' name='name' />
        
        <input className='my-4 p-2 bg-white' type="text" placeholder='email' name='email' />
        <textarea className= 'bg-white' name="message"  rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact
