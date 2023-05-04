import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setnav] = useState(false)
    const handclick = () => setnav(!nav)

    return (
        <div className='fixed min-w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt='logo image' style={{ width: '50px' }} />
            </div>

            {/* menu */}

            <ul className='hidden md:flex'>
                <li>
                <Link  to="home"  smooth={true}  duration={500}>
          HOME
        </Link>
                </li>
                <li>
                    <Link  to="About"  smooth={true}  duration={500}>
          About
        </Link></li>
                <li>
                <Link  to="skills"  smooth={true}  duration={500}>
          Skills
        </Link>
                </li>
                <li>
                <Link  to="work"  smooth={true}  duration={500}>
          Work
        </Link>
                </li>
                <li>
                <Link  to="contact"  smooth={true}  duration={500}>
          Contact
        </Link>
                </li>
            </ul>


            {/* for bars */}
            <div onClick={handclick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py text-4xl'>
                <Link onClick={handclick} to="home"  smooth={true}  duration={500}>
          Home
        </Link>
                </li>
                <li className='py text-4xl'>
                <Link onClick={handclick} to="About"  smooth={true}  duration={500}>
          About
        </Link>
                </li>
                <li className='py text-4xl'>
                <Link onClick={handclick} to="skills"  smooth={true}  duration={500}>
          Skills
        </Link>
                </li>
                <li className='py text-4xl'>
                <Link onClick={handclick} to="work"  smooth={true}  duration={500}>
          Work
        </Link>
                </li>
                <li className='py text-4xl'>
                <Link onClick={handclick} to="contact"  smooth={true}  duration={500}>
          Contact
        </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>

                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar