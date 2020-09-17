import React from 'react';

import User from '../../Components/User/User';
import UserImage from '../../Assets/user.png';
import './sidebar.css';

import {
  Link
} from "react-router-dom";


const Sidebarmenu = () => {

  return (
      <div className="sidebar">
        <div>
          <User src={UserImage} alt="img avatar" className="Img"/>
        </div>
        <div>
          <ul className="ul">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/interest">Interest</Link>
                </li>
                <li>
                  <Link to="/award">Award</Link>
                </li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebarmenu;