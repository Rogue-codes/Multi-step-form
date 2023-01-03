import React from "react";
import styled from "styled-components";
import { thankyou } from "../../assets";

function ThankYou() {
  return (
    <Container>
      <div className="img">
        <img src={thankyou} alt="" />
      </div>
      <div className="text">
        <h2>Thank you!</h2>
        <p>
          Thank you for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to mail us at
          support@loremgaming.com
        </p>
      </div>
    </Container>
  );
}

export default ThankYou;

const Container = styled.div`
  @media (max-width: 768px) {
    min-width: 100%;
    height: 50%;
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
  h2 {
    text-align: center;
    margin-bottom: 5%;
  }
  p {
    text-align: center;
  }
`;
