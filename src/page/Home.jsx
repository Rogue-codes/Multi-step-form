import React, { useState } from "react";
import styled from "styled-components";
import Content from "../components/content-section/Content";
import SideNav from "../components/nav/SideNav";
import { data, plan } from "../utils/data";
function Home() {
  // Tab navigation (holding the tab states)-----------------------------------------------------
  const [activeTab, setactiveTab] = useState(0);
  const [selected, setSelected] = useState(0);
  console.log(activeTab)
  // --------------------------------------------------------------------------------

  // personal info data (form details)--------------------------------------------------------
  const [personalProfile, setPersonalProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // ----------------------------------------------------------------------------------

  // Navigate tab a step forward------------------------------------------------------------
  function increaseActiveTab() {
    setactiveTab(activeTab + 1);
  }
  // ---------------------------------------------------------------------------------------

  // navigate tab a step backward -----------------------------------------------------------
  function decreaseActiveTab() {
    setactiveTab(activeTab > 0 && activeTab - 1);
  }
  // -----------------------------------------------------------------------------------------

  // validate form before moving forward-------------------------------------------------------
  const { name, email, phone } = personalProfile;

  function nextStep() {
    if (!name || !email || !phone) {
      alert("fill in all fields");
      return;
    }
    increaseActiveTab();
  }
  // move backwards---------------------------------------------------------------------------
  function prev() {
    decreaseActiveTab();
  }
  //   ------------------------------------------------------------------------------------------

  // plan--------------------------------------------------------------------------------------
  const [subcriptionPlan, setSubcriptionPlan] = useState(plan);

  // select plan duration (monthly/yearly)
  const [monthly, setMonthly] = useState(true);
  // -------------------------------------------------------------------------------------------

  // add on------------------------------------------------------------------------------------------
  const [addons, setAddons] = useState([
    {
      name: "Online service",
      descr: "Access to multiplayer games",
      price: 1,
      selected: true,
    },
    {
      name: "Larger storage",
      descr: "Extra 1TB of cloud save",
      price: 2,
      selected: true,
    },
    {
      name: "Customizable Profile",
      descr: "Custom theme on your profile",
      price: 2,
      selected: false,
    },
  ]);

  // filtering through the array to get all selected addOn option--------------------------------------------------
  const AddOns = addons.filter((item) => item.selected === true);
  // ----------------------------------------------------------------------------------------------
  
  // switch duration (between month/year)-------------------------------------------------------------------------
  const handleDuration = () => {
    setMonthly(!monthly);
    // if duration is yearly, map through the subcription plan/addons array and multiply its price by 10
    if (monthly) {
      setSubcriptionPlan(
        subcriptionPlan.map((item) => ({ ...item, price: item.price * 10 }))
      );
      setAddons(addons.map((item) => ({ ...item, price: item.price * 10 })));
      return;
    } else {
      // if it's not yearly, divide the price by 10
      setSubcriptionPlan(
        subcriptionPlan.map((item) => ({ ...item, price: item.price / 10 }))
      );
      setAddons(addons.map((item) => ({ ...item, price: item.price / 10 })));
      return;
    }
  };
  // -----------------------------------------------------------------------------------

  return (
    <Container>
      <SideNav activeTab={activeTab} />
      <Content
        selected={selected}
        setSelected={setSelected}
        nextStep={nextStep}
        prev={prev}
        personalProfile={personalProfile}
        setPersonalProfile={setPersonalProfile}
        activeTab={activeTab}
        subcriptionPlan={subcriptionPlan}
        monthly={monthly}
        addons={addons}
        setAddons={setAddons}
        setactiveTab={setactiveTab}
        AddOns={AddOns}
        handleDuration={handleDuration}
      />
    </Container>
  );
}

export default Home;

const Container = styled.main`
@media (max-width: 768px) {
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
  width: 70%;
  height: 100vh;
  background: #fff;
  border-radius: 8px;
  padding: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
