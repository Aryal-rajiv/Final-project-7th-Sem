import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
  return <Wrapper>
    <div className='gird grid-two-column'>
     <div className='hero-section-data'>
      <p className='into-data'>Welcome to </p>
      <h1>FeribrandIT</h1>
       <p>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
       </p>
       <NavLink>
        <Button>
          Shop
        </Button>
       </NavLink>

     </div>
     {/*Homepage wala image */}
     <div className='hero-section-image'>
      <figure>
      <img src='images/hero.png' alt='hero section ko pic' className='image-style'/>
      </figure>
     </div>
    </div>

  </Wrapper>
};
const Wrapper = styled.section`

`;

export default HeroSection
