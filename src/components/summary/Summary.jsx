import React from "react";
import styled from "styled-components";

function Summary({
  subcriptionPlan,
  setactiveTab,
  AddOns,
  selected,
}) {
  const totalAddOns = AddOns.reduce(
    (acc, addon, _) => (addon.selected ? (acc += addon.price) : acc),
    0
  );

  const total = subcriptionPlan[selected].price + totalAddOns;
  return (
    <Container>
      <h2>Finishing up</h2>
      <p className="double_check">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary__card">
        <div className="header">
          <div className="left">
            <p className="title">
              {subcriptionPlan[selected].title}
            </p>
            <div className="change" onClick={() => setactiveTab(1)}>
              Change
            </div>
          </div>
          <div className="right">
            <p className="price">${subcriptionPlan[selected].price}/month</p>
          </div>
        </div>
        <div className="line_through"></div>
        {AddOns.map((item, i) => (
          <div className="list" key={i}>
            <div className="name">
              <p>{item.name}</p>
            </div>
            <div className="addon_price">
              <p>+${item.price}/month</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total">
        <p>Total(per month): </p>
        <p className="right">${total}</p>
      </div>
    </Container>
  );
}

export default Summary;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 5%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #02295a;
  }
  .double_check {
    margin: 1rem 0rem;
  }
  .summary__card {
    background: #f6f7fe;
    height: 40vh;
    border-radius: 8px;
    padding: 25px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        .title {
          color: #02295a;
          font-weight: 500;
          font-size: 1rem;
        }
        .change {
          color: #9699ab;
          cursor: pointer;
          font-size: 0.8rem;
          margin-top: 0.4rem;
          text-decoration: underline;
        }
      }
      .right {
        .price {
          font-weight: 700;
          color: #02295a;
          font-size: 1rem;
        }
      }
    }
    .line_through {
      background-color: #d6d9e6;
      height: 0.5px;
      margin-top: 22px;
      width: 100%;
    }
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.3rem;
      .name {
        color: #9699ab;
        font-size: 1rem;
      }
      .addon_price {
        color: #02295a;
        font-size: 1rem;
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: #9699ab;
    .right {
      color: #473dff;
      font-weight: 500;
    }
  }
`;
