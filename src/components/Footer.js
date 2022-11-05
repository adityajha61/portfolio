import React from 'react'
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <LinkedIn />
        </div>
        <p> &copy; 2022 aditya jha </p>
    </div>
  )
}

export default Footer
