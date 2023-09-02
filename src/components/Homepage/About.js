import { styled } from "styled-components";
import P2 from "./P2.jpg";

const About = () => {
  return (
    <Wrapper>
      <div className="About-Main" id="section-2">
        <div className="Main1">
          <h3>
            Welcome To <span>Live Dineer Restaurant</span>
          </h3>
          <h4>Little Story</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
            convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
            sodales augue, eget lacinia lectus erat et sem.
          </p>
          <p>
            Sed semper orci sit amet porta placerat. Etiam quis finibus eros.
            Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla
            placerat elit in justo vestibulum, et maximus sem pulvinar.
          </p>
        </div>
        <img src={P2} alt="About-Img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  .About-Main {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    margin: 0px 1px 0px 64px;
  }

  .Main1 {
    align-items: left;
  }

  h3 {
    font-size: 25px;
    letter-spacing: 0.1rem;
  }

  span {
    color: #d65106;
  }

  p {
    font-size: 18px;
    font-family: "Rubik", sans-serif;
    line-height: 1.80857;
  }

  img {
    width: 150%;
    height: 430px;
    border-radius: 10px;
    margin-top: 118px;
    box-shadow: #d65106 20px 20px;
  }

  @media (max-width: 769px) {
    .About-Main {
      display: grid;
    }
    img {
      width: 80%;
      height: 350px;
    }
  }
`;

export default About;
