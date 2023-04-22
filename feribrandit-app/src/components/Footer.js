import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {FiInstagram} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

const footer = () => {
  return <Wrapper>
    <div className="contact-short">
      <div className='grid grid-two-column'>
        <div>
          <h3>Ready to Get Started</h3>
          <h3>Talk to us</h3>
        </div>
        <div>
          <Button>
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>
      </div>
    </div>

    <footer>
      <div className='container grid grid-four-column'>
        <div className='footer-about'>
          <h3>FeriBrandit</h3>
          <p>you owe us</p>
        </div>

        <div className='footer-subscribe'>
          <h3>Subscrine to get cloth updates</h3>
          <form action='#'>
            <input type='email' placeholder='Your email' />
            <input typeof='submit' value="subscribe" />
          </form>
        </div>

        <div>
          <h3>Follow us</h3>
          <div className = "footer-social-icons">
            <div>
              <FaDiscord className="icons" />
            </div>

            <div>
              <FiInstagram className="icons" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  </Wrapper>
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: grid;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.red};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default footer;