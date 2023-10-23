import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import {BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoMongodb} from 'react-icons/bi'
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {IoLogoNodejs} from 'react-icons/io'



const Skills = () => {
  return (
    <div name="skills" className='w-full h-auto bg-[#fbf7f5] text-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
           
            
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
        <div >
            <AiFillHtml5 size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>HTML</p>
        </div>
        <div >
            <BiLogoCss3 size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>CSS</p>
        </div>
        <div >
            <BiLogoJavascript size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>JavaScript</p>
        </div>
        <div >
            <IoLogoNodejs size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>Node.js</p>
        </div>
        <div >
            <BiLogoPython size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>Python</p>
        </div>
        <div >
            <BiLogoReact size={50} className='flex justify-between items-center w-full'/>
            <p className='my-4'>React</p>
        </div>
        <div >
            <BiLogoMongodb size={50} className='flex justify-between items-center w-full' />
            <p className='my-4'>Mongo.db</p>
        </div>
        <div >
            <AiFillGithub size={50} className='flex justify-between items-center w-full' />
            <p className='my-4'>Github</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
