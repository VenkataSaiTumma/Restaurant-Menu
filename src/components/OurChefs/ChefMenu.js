import { styled } from "styled-components";
import { chef } from "../../data";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ChefMenu = () => {
  return (
    <Wrapper>
      <div className="chef-Main">
        {chef.map((items) => {
          const { id, image, name, title } = items;
          return (
            <article key={id}>
              <div className="Main">
                <div className="chef1">
                  <img src={image} alt="chef1" />
                </div>
                <div className="chef-info">
                  <h3>{name}</h3>
                  <span>{title}</span>
                  <div className="social">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook className="icon" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="icon" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="icon" />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .chef-Main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  article {
    margin: 0px 0px 101px 29px;
  }

  .chef-heading {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .Main {
    margin: 21px 0px 0px 0px;
  }

  .chef1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 60px 0px 0px;
  }

  img {
    width: 300px;
    border-radius: 10px;
  }

  .chef-info {
    position: absolute;
    width: 250px;
    height: 85px;
    background: #fff;
    padding: 20px 0;
    margin: -46px 0px 0px 33px;
    border-radius: 10px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: #6c665c;
    font-family: "Poppins", sans-serif;
  }

  span {
    font-style: italic;
  }

  h3,
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 18px 14px 10px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    color: #d65106;
    margin: 5px;
  }

  .icon:hover {
    transform: scale(1.5);
  }

  @media (max-width: 769px) {
    .chef-Main {
      display: grid;
      margin: -2px 0px -1px 0px;
    }

    .Main {
      margin: 17px -70px 0px 0px;
    }

    img {
      width: 450px;
    }

    .chef-info {
      width: 400px;
      margin: -50px 0px 0px 25px;
      padding: 20px 0;
    }
  }
`;

export default ChefMenu;
