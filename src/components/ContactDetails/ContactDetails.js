import { styled } from "styled-components";
import { FaGreaterThan } from "react-icons/fa";
import { details } from "../../data";

const ContactDetails = () => {
  return (
    <Wrapper>
      <div className="box" id="section-5">
        {details.map((items) => {
          const { id, icon, name, details } = items;
          return (
            <article key={id}>
              <div className="align-all">
                <div className="icon-box">
                  <span className="icon">{icon}</span>
                </div>
                <div className="align-contact">
                  <h4>{name}</h4>
                  <p>{details}</p>
                </div>
                <FaGreaterThan className="icon2" />
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .box {
    display: flex;
    width: 100%;
    background-color: #d65106;
    border-radius: 60px;
  }

  .align-all {
    display: flex;
  }

  .icon-box {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 8px;
    margin: 0px 0px 0px 24px;
  }

  .icon {
    display: flex;
    margin: 15px 0px 0px 16px;
    font-size: 30px;
    color: #d65106;
  }

  .align-contact {
    margin: -22px 0px 0px 20px;
  }

  h4,
  p {
    color: white;
    letter-spacing: 0.05rem;
  }
  p {
    margin: -14px 0px 0px 0px;
  }

  .icon2 {
    font-size: 40px;
    color: white;
    margin: 10px 0px 0px 50px;
  }

  @media (max-width: 1430px) {
    .align-all {
      margin: 10px 0px 0px 112px;
    }
  }

  @media (max-width: 1200px) {
    .align-all {
      margin: 12px 0px 0px 55px;
    }
  }

  @media (max-width: 1080px) {
    .align-all {
      margin: 10px 0px 0px 10px;
    }
  }

  @media (max-width: 900px) {
    .align-all {
      margin: 18px -23px 0px 0px;
    }

    .icon2 {
      margin: 0px 22px 0px 0px;
    }
  }

  @media (max-width: 768px) {
    .box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }

    h4,
    p {
      font-size: 20px;
    }

    .icon2 {
      margin: 10px 0px 0px 110px;
    }
  }

  @media (max-width: 600px) {
    .box {
      width: 593px;
    }
  }
`;

export default ContactDetails;
