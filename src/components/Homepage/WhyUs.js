import { styled } from "styled-components";

const WhyUs = () => {
  return (
    <Wrapper>
      <div className="choose-Main">
        <h1>
          Why choose <span>Our Restaurant</span>
        </h1>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est</p>
      </div>

      {/* Box1 */}
      <div className="gridalign">
        <div className="box">
          <h3>01</h3>
          <h2>Lorem lpsum</h2>
          <p>Minim id non sunt eu est dolore ipsum.</p>
        </div>

        {/* Box2 */}
        <div className="box">
          <h3>02</h3>
          <h2>Repellat Nihil</h2>
          <p>
            Consequat sunt incididunt quis dolor enim culpa labore non veniam.
          </p>
        </div>

        {/* Box3 */}
        <div className="box">
          <h3>03</h3>
          <h2>Repellat Nihil</h2>
          <p>Esse irure exercitation non enim magna eiusmod.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .choose-Main {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 22px 0px 0px 0px;
  }

  h1,
  h2,
  h3,
  p {
    font-family: cursive;
  }

  span {
    color: #d65106;
  }

  .gridalign {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box {
    width: 75%;
    box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
    margin: 41px 9px 0px 18px;
    border-radius: 15px;
  }

  h3 {
    color: #d65106;
  }

  h3,
  h2,
  p {
    margin-left: 30px;
  }

  .box:hover {
    background-color: #d65106;
    box-shadow: 0 0 10px #d65106;
    h3,
    h2,
    p {
      color: white;
    }
  }

  @media (max-width: 769px) {
    .gridalign {
      display: grid;
    }
  }

  @media (max-width: 486px) {
    .choose-Main {
      margin: 18px 0px 0px 29px;
    }

    .box {
      margin: 35px 0px 0px 47px;
    }
  }
`;

export default WhyUs;
