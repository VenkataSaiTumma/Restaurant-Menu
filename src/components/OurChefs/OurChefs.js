import { styled } from "styled-components";
import ChefMenu from "./ChefMenu";

const OurChefs = () => {
  return (
    <Wrapper>
      <div className="Main-chef">
        <h2>Our Professional Chefs</h2>
        <p>Minim consequat consectetur reprehenderit id.</p>
      </div>
      <ChefMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main-chef {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 31px 0px 0px 0px;
  }

  h2 {
    margin: 16px 0px 0px 80px;
    font-size: 30px;
  }

  p {
    margin: 25px 0px 0px 80px;
  }
`;

export default OurChefs;
