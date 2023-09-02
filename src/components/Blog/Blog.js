import { styled } from "styled-components";
import { blog } from "../../data";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <Wrapper>
      <Header />
      <div className="Blog-title">
        <h2>Blog</h2>
        <span className="Blog-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </span>
      </div>
      <div className="align-items">
        <div className="Main-container">
          {blog.map((items) => {
            const { id, title, details, date, desc } = items;
            return (
              <article key={id}>
                <div className="box">
                  <h3>{title}</h3>
                  <span>
                    {details} |{date}{" "}
                  </span>
                  <p className="para">{desc}</p>
                  <button className="btn blog-btn">Read More</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Blog-title {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 94px;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 46px 0px 16px 196px; */
  }

  .Blog-desc {
    color: black;
  }

  .align-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Main-container {
    margin: 0;
  }

  .box {
    width: 90%;
    height: 300px;
    box-shadow: 10px 10px 10px 3px rgb(0 0 0 / 0.2);
    border-radius: 10px;
    margin: 24px 0px 0px 39px;
  }

  h3 {
    padding-top: 20px;
  }

  h3,
  p,
  span {
    margin-left: 20px;
  }

  span {
    color: #d65106;
  }

  .para {
    line-height: 30px;
  }

  .blog-btn {
    margin-left: 50px;
  }

  @media (max-width: 786px) {
    .Main-container {
      display: grid;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Blog;
