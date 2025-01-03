import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div>
      <div className='header_container'>
        <div className='header_left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix logo' />
        </div>
        <div className='header_right'>
          <ul>
            <li><img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix logo' width='100px' /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
                      <li><SearchIcon /></li>
                      <li><NotificationsIcon /></li>
                      <li><AccountBoxIcon /></li>
                      <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
