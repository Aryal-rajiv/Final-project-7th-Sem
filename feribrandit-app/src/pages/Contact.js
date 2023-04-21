import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    
    .container {
      margin-top: 6rem;
      
      .contact-form {
        max-width: 50rem;
        margin: auto;
        
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
         
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.273530900572!2d84.43790322389646!3d27.708839675428514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e4ad70984a03%3A0xc2c47a165d3449dd!2sAaptari%2C%20Bharatpur%2044200!5e0!3m2!1sen!2snp!4v1681920449983!5m2!1sen!2snp" 
      width="100%" 
      height="450" 
      style={{ border:0 }}
      allowfullscreen=""
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xgebrypg" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="Username" required autoComplete="off"/>
            <input type="email"placeholder="Email" value="" />
            <textarea name="Message" cols="30" rows="10" required autoComplete="off" 
            placeholder="Enter your message"></textarea>
            <input type="submit" value="submit" />

          </form>
        </div>
      </div>

    </Wrapper>
    
  )
}

export default Contact;