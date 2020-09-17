import React from 'react';
import PropTypes from 'prop-types';
import {Img} from './user.style';

const User = ({ src, alt }) => {
  return (
    <Img src={src} alt={alt}/>
  );
}

User.propTypes = {
  src: PropTypes.string.isRequired,
}


export default User;