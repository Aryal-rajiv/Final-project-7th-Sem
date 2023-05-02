import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = () => {
  
  return <Wrapper>
    <div className='gird grid-two-column'>
     <div className='hero-section-data'>
      <h3 className='into-data'>Welcome to </h3>
      <h1>FeribrandIT</h1>
       <p>  
FeribrandIT is a basic web based application which mainly focuses on the rebranding of the 
used clothes through our renowned fashion designers, providing them a fresh and unique look 
and selling them at a very reasonable and affordable price. Since we cannot afford new dresses 
for every occasion so that FeribrandIT maybe the best choice for everyone of us. We provide buying selling and rebranding of clothes with best designers.

       </p>
       
       <NavLink>
        <Button>
          Shop now
        </Button>
       </NavLink>
       

     </div>
     {/*Homepage wala image */}
     <div className='hero-section-image'>
      <figure>
      <img src='images\herosection.jpg' alt='hero section ko pic' className='image-style'/>
      </figure>
     </div>
    </div>

  </Wrapper>
};
const Wrapper = styled.section`
     padding: 12rem 0;

  .hero-section-data {
    float: left;
    width: 50%;
    p {
      margin: 3rem 0;
      padding-left: 2rem;
      
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      padding-left: 2rem;
    }
    button{
      margin-left: 40rem;
    }
    h3{
      margin-bottom: 1rem;
      margin-left: 2rem;
      color: black;
    }
  }
  .hero-section-image {
    width: 50%;
    height: auto;
    display: flex;
    flex: right;
    justify-content: center;
    align-items: center;
    img {
    min-width: 50rem;
    height: 50rem;
    float: right;
  }
  }
 
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: brown;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

`;

export default HeroSection
