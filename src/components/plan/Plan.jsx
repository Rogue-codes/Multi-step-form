import styled from "styled-components";

function Plan({
  subcriptionPlan,
  monthly,
  handleDuration,
  setSelected,
  selected,
}) {
  function handleSubscriptionPlan(i) {
    setSelected(i);
  }

  return (
    <Container>
      <h2>Select Your Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="flex">
        {subcriptionPlan.map((plan, i) => (
          <div
            className={selected === i ? "card active" : "card"}
            key={i}
            onClick={() => handleSubscriptionPlan(i, plan)}
          >
            <div className="icon">
              <img src={plan.ico} alt="" />
            </div>
            <div className="text">
              <p className="plan__title">{plan.title}</p>
              <p className="plan__price">
                ${plan.price}/{monthly ? "month" : "year"}
              </p>
            </div>
            {!monthly && <p>2 months free</p>}
          </div>
        ))}
      </div>
      <div className="monthly__yearly">
        <span>monthly</span>
        <div className="toggle" onClick={() => handleDuration()}>
          <div className={!monthly ? "circle toggled" : "circle"}></div>
        </div>
        <span>yearly</span>
      </div>
    </Container>
  );
}

export default Plan;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 10%;
  h1 {
    color: #02295a;
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    margin-top: 0.9rem;
    color: #9699ab;
  }
  .flex {
    @media (max-width: 768px) {
      flex-direction: column;
    }
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    .card {
      @media (max-width: 768px) {
        width: 100%;
        min-height: 4.6rem;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 5%;
        margin-bottom: 5%;
      }
      border: 1px solid lightgray;
      border-radius: 8px;
      min-height: 10rem;
      width: 26%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2%;
      cursor: pointer;
      &:hover {
        border: 1.5px solid #5a579e;
      }
      .text {
        .plan__title {
          @media (max-width: 768px) {
            margin-top: -6% !important;
          }
        }
        .plan__price {
          @media (max-width: 768px) {
            margin-top: 0% !important;
          }
        }
      }
    }
    .active {
      border: 1.5px solid #5a579e;
    }
  }
  .monthly__yearly {
    display: flex;
    justify-content: center;
    background: #f6f7fe;
    border-radius: 5px;
    margin-top: 2rem;
    height: 2.8rem;
    gap: 3%;
    align-items: center;
    .toggle {
      width: 40px;
      height: 20px;
      background: #02295a;
      border-radius: 15px;
      position: relative;
      .circle {
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #000;
        left: 5%;
        top: 20%;
        border-radius: 50%;
        background: white;
        transition: all 0.2s linear;
        cursor: pointer;
      }
      .toggled {
        left: 55%;
      }
    }
  }
`;
