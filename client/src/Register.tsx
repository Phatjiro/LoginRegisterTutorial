import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FcGoogle } from "react-icons/fc";

import bgFlower from './assets/bg_flower.jpg'
import { Link, useNavigate } from 'react-router-dom'

import anxios from 'axios'

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        anxios.post("http://localhost:3000/api/register", { email, password })
        .then(res => {
            console.log("Register - OK!")
            navigate('/login')
        })
        .catch(err => console.log(err));
    };

    const navigate = useNavigate()

  return (
    <>
        <div className='container'>
            <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 h-full w-full absolute">
                <div className='relative grid grid-cols-12 h-screen'>
                    <div id='div_login_space_pos_1' className='col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-3'>
                        
                    </div>
                    <div id='div_login_welcome' className='hidden md:col-span-5 md:grid xl:col-span-3 py-6'>
                        <div className='h-full relative'>
                            <img src={bgFlower} alt="" className='h-full rounded-3xl opacity-60'/>
                            <div className='absolute top-0 left-0 p-12 space-y-6'>
                                <h1 className='text-gray-300 font-semibold text-2xl'>Welcome</h1>
                                <h1 className='text-gray-300'>This is my project to practice reactjs 2023 making by Phatjiro</h1>
                                <h1 className='text-gray-300'>You can visit me in github: <a href="https://github.com/Phatjiro" target="_blank" className='text-purple-300'>Phatjiro <FontAwesomeIcon icon={faGithub} /></a></h1>
                            </div>
                        </div>
                    </div>
                    <div id='div_login_form' className='col-span-10 sm:col-span-8 md:col-span-5 xl:col-span-3 py-6'>
                        <div className='bg-white rounded-3xl p-12 h-full relative'>
                            <div className='mb-6'>
                                <h1 className='font-semibold text-2xl'>Register</h1>
                                <p className="text-gray-400">Already have an account? <Link to="/login" className="text-sm font-medium text-purple-700 hover:text-purple-600">Login now</Link></p>
                            </div>
                            <div className='space-y-6'>
                                <input 
                                    className="input_login_register"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className='relative'>
                                    <input
                                        className='input_login_register'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="flex items-center absolute inset-y-0 right-0 mr-3">
                                        <FontAwesomeIcon icon={showPassword? faEye : faEyeSlash} onClick={toggleShowPassword} className='text-purple-700'/>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <input
                                        className='input_login_register'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <div className="flex items-center absolute inset-y-0 right-0 mr-3">
                                        <FontAwesomeIcon icon={showPassword? faEye : faEyeSlash} onClick={toggleShowPassword} className='text-purple-700'/>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='text-sm ml-auto'>
                                        <a href="#" className='text-purple-700 hover:text-purple-600'>
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                        type='submit' 
                                        className='button_login_register'
                                        onClick={handleSubmitRegister}>
                                        Register
                                    </button>
                                </div>
                                <div className='flex items-center justify-center space-x-2'>
                                    <span className='h-px w-16 bg-gray-100'></span>
                                    <span className='text-gray-300'>or</span>
                                    <span className='h-px w-16 bg-gray-100'></span>
                                </div>
                                <div className='flex justify-center gap-5 w-full'>
                                    <button data-tooltip className='button_login_register_google_facebook'>
                                        <FcGoogle className='text-2xl mr-2 hover:animate-spin'/>
                                        <span>Google</span>
                                    </button>
                                    <button className='button_login_register_google_facebook'>
                                        <FontAwesomeIcon icon={faFacebook} style={{color: "#1877f2",}} className='text-2xl mr-2 hover:animate-spin'/>
                                        <span>Facebook</span>
                                    </button>
                                </div>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='text-center text-gray-300 text-xs pb-6'>
                                    <span>
                                        Project 2023 by
                                    </span>
                                    <a href="https://github.com/Phatjiro" target="_blank" className='text-purple-700 hover:text-purple-600'> Phatjiro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='div_login_space_pos_4' className='col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-3'>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register