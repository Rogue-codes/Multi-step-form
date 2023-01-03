import React from "react";
import styled from "styled-components";
import { sideBg, sideBgMobile } from "../../assets";
import { data } from "../../utils/data";

function SideNav({ activeTab }) {
  return (
    <Nav>
      {data.map((link, i) => (
        <div className="navigator" key={i}>
          <div className={activeTab === i ? "numb active" : "numb"}>
            {link.numb}
          </div>
          <div className={activeTab === i ? "text text-active" : "text"}>
            <p className="smText">{link.subtitle}</p>
            <p className="bgText">{link.title}</p>
          </div>
        </div>
      ))}
    </Nav>
  );
}

export default SideNav;

const Nav = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    background: url(${sideBgMobile});
    min-height: 10.6rem;
  }
  width: 25%;
  height: 100%;
  background: url(${sideBg});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  padding-top: 2%;
  .navigator {
    @media (max-width: 768px) {
      margin-top: 0%;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
    gap: 5%;
    margin-top: 2rem;
    .numb {
      width: 32px;
      height: 32px;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
    }
    .active {
      background: #bfe2fd;
    }
    .text {
      @media (max-width: 768px) {
        display: none;
      }
      color: lightgray;
      .smText {
        font-size: 0.7rem;
        font-weight: 500;
      }
      .bgText {
        font-size: 1rem;
        font-weight: 500;
      }
    }
    .text-active {
      color: white;
    }
  }
`;
