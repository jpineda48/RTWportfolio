import React, { useState }from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {Link} from 'react-scroll'
import pdf from '../assets/Full_Stack_Engineer.pdf'



export default function NavBar(){
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 pt-10 bg-[#fbf7f5] text-black'>
            <div>
                <p></p>
            </div>

           
                <ul className='hidden md:flex'>
                    <li>
                    <Link  to="home" smooth={true} offset={50} duration={500}>
                    Home
                     </Link>

                    </li>
                    <li>
                    <Link  to="about" smooth={true} offset={50} duration={500}>
                    About
                     </Link>
                    </li>
                    <li><Link  to="skills" smooth={true} offset={50} duration={500}>
                    Skills
                     </Link></li>
                    <li><Link  to="work" smooth={true} offset={50} duration={500}>
                    Work
                     </Link></li>
                     <li><Link  to="contact" smooth={true} offset={50} duration={500}>
                    Contact
                     </Link></li>
                     <li>
                        <button>
                        <a className="button" href={pdf} download ="Full_Stack_Engineer.pdf">
                            Resume
                            </a>
                            </button>
                     </li>
                </ul>
           
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fbf7f5] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                    Home
             </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                    About
             </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                    Skills
             </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                    Work
             </Link></li>
             <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                    Contact
             </Link></li>
            </ul>
            <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dbdede]'>
                        <a className='flex justify-between items-center w-full text-grey-300' 
                        href="https://www.linkedin.com/in/jacqueline-e-pineda/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dbdede]'>
                        <a className='flex justify-between items-center w-full text-grey-300' 
                        href="https://github.com/jpineda48">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                   
                </ul>

            </div>
        </div>
    )
}