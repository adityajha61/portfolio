import React from 'react'
import { LinkedIn, Email  } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import "../styles/Home.css"
import { Link } from '@mui/material'
const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I am Aditya Jha.</h2>
        <div className='prompt'> <p> A Software Engineer at PayU looking to build cool things.</p>
        <Link href="http://www.linkedin.com/in/adityajha61">
        <LinkedIn />
        </Link>
        <Link href="http://www.github.com/adityajha61">
        <GitHub />
        </Link>
        <Link href="mailto:adityajha15052@gmail.com">
        <Email />
        </Link>
        
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Frontend</h2>
            <span>ReactJS, JavaScript, TypeScript, MaterialUI, TailwindCSS,</span>
          </li>
          <li className='item'>
            <h2>Backend</h2>
            <span>Golang, SpringBoot, AWS S3, Docker, Jenkins, CI/CD, MySQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, C++, Go, C, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
