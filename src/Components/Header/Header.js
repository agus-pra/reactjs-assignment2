import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Div} from './header.style';


const Header = ({head}) =>{
    return(
        <Wrapper>
            <Div><h1>{head}</h1></Div>
        </Wrapper>
    )
};

Header.propTypes = {
    head: PropTypes.string.isRequired,
  }
  

export default Header;