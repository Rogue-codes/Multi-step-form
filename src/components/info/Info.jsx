import React from "react";
import styled from "styled-components";

function Info({ setPersonalProfile, personalProfile }) {
  return (
    <Container>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number.</p>
      <form action="">
        <div className="name">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name=""
            value={personalProfile.name}
            onChange={(e) =>
              setPersonalProfile({ ...personalProfile, name: e.target.value })
            }
            id=""
            placeholder="e.g Stephen King"
          />
        </div>
        <div className="email">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="e.g stephenking@lorem"
            value={personalProfile.email}
            onChange={(e) =>
              setPersonalProfile({ ...personalProfile, email: e.target.value })
            }
          />
        </div>
        <div className="phone">
          <label htmlFor="">Phone number</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="e.g +123 456 789"
            value={personalProfile.phone}
            onChange={(e) =>
              setPersonalProfile({ ...personalProfile, phone: e.target.value })
            }
          />
        </div>
      </form>
    </Container>
  );
}

export default Info;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 5%;
  h2 {
    color: #02295a;
  }
  p {
    margin-top: 2%;
    color: #9699ab;
    font-size: 1rem;
  }
  form {
    margin-top: 5%;
    .name {
      @media (max-width: 768px) {
        margin-top: 8%;
      }
      label {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: #02295a;
      }
      input {
        @media (max-width: 768px) {
          width: 100%;
        }
        height: 8vh;
        margin-top: 0.5%;
        width: 60%;
        border-radius: 5px;
        padding: 2%;
        cursor: pointer;
        border: none;
        border: 1px solid grey;
        &:focus {
          outline: none;
        }
        &:hover {
          border-color: navy;
        }
        &::placeholder {
          font-size: 1rem;
        }
      }
    }
    .email {
      @media (max-width: 768px) {
        margin-top: 8%;
      }
      margin-top: 2%;
      label {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: #02295a;
      }
      input {
        @media (max-width: 768px) {
          width: 100%;
        }
        height: 8vh;
        margin-top: 0.5%;
        width: 60%;
        border-radius: 5px;
        padding: 2%;
        cursor: pointer;
        border: none;
        border: 1px solid grey;
        &:focus {
          outline: none;
        }
        &:hover {
          border-color: navy;
        }
        &::placeholder {
          font-size: 1rem;
        }
      }
    }
    .phone {
      @media (max-width: 768px) {
        margin-top: 8%;
      }
      margin-top: 2%;
      label {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: #02295a;
      }
      input {
        @media (max-width: 768px) {
          width: 100%;
        }
        height: 8vh;
        margin-top: 0.5%;
        width: 60%;
        border-radius: 5px;
        padding: 2%;
        cursor: pointer;
        border: none;
        border: 1px solid grey;
        &:focus {
          outline: none;
        }
        &:hover {
          border-color: navy;
        }
        &::placeholder {
          font-size: 1rem;
        }
      }
    }
  }
`;
