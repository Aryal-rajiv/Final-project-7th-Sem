import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {
  return (
  <Wrapper>
    <div classname="container">
        <div>
            <h2>404</h2>
            <h2>OH! Error</h2>
            <p>The page doesn't exist. Click the button below to go back to the homepage.</p>
            <Button> Go back to Home</Button>
        </div>




    </div>

  </Wrapper>
  );

};

const Wrapper = styled.section`
    .container{
        text-align: center;
        padding: 9rem 0;

        h1{
        font-size:10 rem;
    }
    p{
        margin 2rem 0;
    }
    }
    



`;

export default Error;