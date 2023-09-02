import { styled } from "styled-components";
import P1 from "./P1.jpg";

const Homepage = () => {
  return (
    <Wrapper>
      <div className="Home-container" id="section-1">
        <img src={P1} alt="slide1" />
        <div className="Home-Main">
          <div className="row">
            <h1>
              Welcome to
              <br />
              Live Dinner Restaurant
            </h1>
            <p>
              Culpa sint minim irure consequat adipisicing do non
              <br />
              adipisicing id aute pariatur irure.
            </p>
            <button className="btn">Reservation</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Home-container {
    overflow: hidden;
    height: 463px;
  }

  img {
    width: 100%;
    height: 600px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
  }

  .Home-Main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
  }

  .row {
    margin: 100px 83px 0px 0px;
  }

  h1,
  p {
    letter-spacing: 0.1rem;
    color: white;
    font-weight: 600;
  }

  @media (max-width: 486px) {
    img {
      width: 600px;
      height: 463px;
    }

    .row {
      margin: 132px 0px 0px 34px;
    }
  }
`;

export default Homepage;
