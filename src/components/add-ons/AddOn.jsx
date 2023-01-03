import React from "react";
import styled from "styled-components";

function AddOn({ setAddons, addons }) {

    const handleChange = (index) => {
        setAddons(
          addons.map((addon, addonIndex) =>
            index === addonIndex ? { ...addon, selected: !addon.selected } : addon
          )
        );
      };
  return (
    <Container>
      <h2 className="name">Pick add-ons</h2>
      <p className="descr"> Add-ons help enhance your gaming experience.</p>
      <div className="wrapper">
        {addons.map((addOn, i) => (
          <div
            className={addOn.selected ? "card selected" : "card"}
            onClick={() => handleChange(i)}
            key={i}
          >
            <div className="left">
              <h2 className="adon__name">{addOn.name}</h2>
              <p className="adon__desc">{addOn.descr}</p>
            </div>
            <div className="right">
              <p>+${addOn.price}/mo</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AddOn;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 5%;
  .name{
    color: #02295a;
    font-size: 2rem;
  }
  .descr{
    color: #9699ab;
    margin:  5% 0%;
  }
  .wrapper {
    .card {
      @media (max-width: 768px) {
      margin-top: 5%!important;
      min-height: 7rem;
    }
      border: 1px solid #d6d9e6;
      display: flex;
      justify-content: space-between;
      padding: 0rem 1.6rem;
      align-items: center;
      margin-bottom: 2%;
      border-radius: 8px;
      cursor: pointer;
      height: 5rem;
      .left{
        .adon__name{
            color: #02295a;
            font-size: 1.2rem;
        }
        .adon__desc{
            color: #9699ab;
            font-size: 1rem;
            margin-top: 5px;
        }
      }
      .right{
        color: #7972da;
        font-size: .9rem;
      }
    }
    .selected {
      border: solid 1px #5a579e;
      background: #f6f7fe;
    }
  }
`;
