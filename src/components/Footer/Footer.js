import { useState } from "react";
import { styled } from "styled-components";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [value, setValue] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <div className="Foot-Main">
        <div className="About-us">
          <h2>About US</h2>
          <hr />
          <p>
            Sunt commodo irure est qui nisi aliquip aute commodo enim cupidatat
            non esse incididunt pariatur. Incididunt adipisicing incididunt
            commodo officia velit ipsum duis irure cillum est.
          </p>
        </div>

        {/* Subscribe start */}
        <div className="About-us">
          <h2>Subscribe</h2>
          <hr />

          {/* Subscribe Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={value.email}
              name="email"
              onChange={handleChange}
            />
            <button className="btn btn2">subscribe</button>
          </form>

          {/* Social Media */}
          <div className="social-media">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-box">
                <FaFacebook className="icon" />
              </div>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <div className="icon-box">
                <FaTwitter className="icon" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-box">
                <FaInstagram className="icon" />
              </div>
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <div className="icon-box">
                <FaGoogle className="icon" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-box">
                <FaLinkedin className="icon" />
              </div>
            </a>
          </div>
        </div>
        {/* Subscribe End */}

        {/* Opening Hours */}
        <div className="About-us">
          <h2>Opening Hours</h2>
          <hr />
          <p>Monday: Closed</p>
          <p>Tue-Fri: 9AM-10PM</p>
          <p>Sat-Sun: 11AM-11PM</p>
        </div>

        <div className="bottom">
          <h3>
            All rights reserved &copy; {new Date().getFullYear()}
            <span> Classy Luxury</span>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Foot-Main {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    background-color: #454545;
    color: white;
    border-radius: 20px;
  }

  .About-us {
    flex: 0 0 25%;
    margin: 0px 14px 0px 61px;
  }

  h2 {
    text-transform: uppercase;
  }

  p {
    line-height: 30px;
    font-size: 15px;
    padding-bottom: 10px;
    font-family: "Rubik", sans-serif;
  }

  input {
    border: none;
    line-height: 50px;
    padding: 0 10px;
    width: 80%;
    border-radius: 10px;
  }

  .btn2 {
    width: 85%;
  }

  .btn2:hover {
    background-color: lightblue;
    color: #d65106;
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .icon-box {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 8px;
    margin: 0px 0px 0px 17px;
  }

  .icon {
    display: flex;
    margin: 15px 0px 0px 8px;
    padding-top: 10px;
    font-size: 20px;
    color: #d65106;
  }

  span:hover {
    color: #d65106;
  }

  .bottom {
    margin: 0px 0px 0px 460px;
    font-size: 16px;
    letter-spacing: 0.1rem;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 769px) {
    .Foot-Main {
      display: grid;
    }

    .About-us {
      margin: 0px 0px 0px 36px;
    }

    .icon-box {
      width: 50px;
      height: 50px;
    }

    .icon {
      font-size: 30px;
    }

    .btn2 {
      width: 83%;
    }

    .bottom {
      margin: 0.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .Foot-Main {
      width: auto;
    }
  }

  @media (max-width: 554px) {
    .Foot-Main {
      width: 591px;
      margin: 0px 0px 0px 3px;
    }
  }
`;

export default Footer;
