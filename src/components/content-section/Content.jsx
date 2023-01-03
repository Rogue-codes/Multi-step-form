import React from "react";
import styled from "styled-components";
import AddOn from "../add-ons/AddOn";
import Info from "../info/Info";
import Plan from "../plan/Plan";
import Summary from "../summary/Summary";
import ThankYou from "../thankYou/ThankYou";

function Content({
  activeTab,
  nextStep,
  prev,
  personalProfile,
  setPersonalProfile,
  selected,
  setSelected,
  subcriptionPlan,
  monthly,
  setAddons,
  addons,
  setactiveTab,
  AddOns,
  handleDuration,
}) {
  return (
    <Container>
      {activeTab === 0 ? (
        <Info
          personalProfile={personalProfile}
          setPersonalProfile={setPersonalProfile}
        />
      ) : activeTab === 1 ? (
        <Plan
          subcriptionPlan={subcriptionPlan}
          monthly={monthly}
          handleDuration={handleDuration}
          selected={selected}
          setSelected={setSelected}
        />
      ) : activeTab === 2 ? (
        <AddOn addons={addons} setAddons={setAddons} />
      ) : activeTab === 3 ? (
        <Summary
          subcriptionPlan={subcriptionPlan}
          setactiveTab={setactiveTab}
          AddOns={AddOns}
          selected={selected}
        />
      ) : (
        <ThankYou />
      )}
      <div className={activeTab === 4 ? "btns none" : "btns"}>
        <button
          className={activeTab === 0 ? "button inactive" : "button"}
          onClick={prev}
        >
          Go Back
        </button>
        <button
          className={activeTab === 3 ? "final_button" : "button"}
          onClick={nextStep}
        >
          {activeTab === 3 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </Container>
  );
}

export default Content;

const Container = styled.section`
  @media (max-width: 768px) {
    min-height: 100vh;
    margin-top: -15% !important;
    border-radius: 8px;
    width: 90%;
    margin: auto;
    padding-left: 0;
  }
  width: 75%;
  height: 100%;
  padding-left: 5%;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background: white;
  .btns {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 60%;
    display: flex;
    justify-content: flex-start;
    padding-left: 5%;
    gap: 50%;
    .button {
      width: 7.6rem;
      height: 3rem;
      border-radius: 5px;
      border: none;
      background: #02295a;
      color: white;
      cursor: pointer;
      font-size: 0.8rem;
      &:hover {
        background: #473dff;
      }
      &:nth-child(1) {
        background: transparent;
        color: grey;
        &:hover {
          color: #02295a;
        }
      }
    }
    .final_button {
      background: #473dff;
      width: 7.6rem;
      height: 3rem;
      border-radius: 5px;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 0.8rem;
    }
    .inactive {
      display: none;
    }
  }
  .none {
    display: none;
  }
`;
