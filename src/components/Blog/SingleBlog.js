import { styled } from "styled-components";
import Header from "../Header/Header";
import B1 from "./B1.jpg";
import avt from "./avt.jpg";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { recentPost } from "../../data";

const SingleBlog = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <Header />
      <div className="blog-container">
        <div className="Main-Blog">
          <h1>Single Blog</h1>
          <p>Minim ex sit id anim consectetur fugiat voluptate.</p>
        </div>
        <div className="Blog-left-right">
          {/* <div className="First-Main"> */}
          <div className="second-Main">
            {/* <div className="img-align"> */}
            <img src={B1} alt="single-blog" className="blog-image" />
            {/* </div> */}
            {/* <div className="blog-heading"> */}
            <div className="Mobile-align-text">
              <h3>Ad aliqua non voluptate elit irure Lorem reprehenderit.</h3>
              <h4>
                Posted By: <span>user</span> | Time: <span>11:30PM</span>{" "}
              </h4>
              <p>
                Amet fugiat qui aute veniam aute. Nulla occaecat laboris ullamco
                esse proident sint velit
                <br /> esse do pariatur. Ex ad quis veniam ullamco excepteur
                dolor commodo sit culpa.
                <br />
                Laborum duis eu magna exercitation dolor. Eu magna ullamco
                mollit eu. Excepteur tempor
                <br /> adipisicing in deserunt incididunt quis tempor non do
                anim reprehenderit veniam minim duis.
                <br />
                Culpa sit dolore id magna reprehenderit duis ad quis deserunt
                ullamco fugiat ea fugiat.
              </p>

              <p>
                Amet fugiat qui aute veniam aute. Nulla occaecat laboris ullamco
                esse proident sint velit
                <br /> esse do pariatur. Ex ad quis veniam ullamco excepteur
                dolor commodo sit culpa.
                <br />
                Laborum duis eu magna exercitation dolor. Eu magna ullamco
                mollit eu. Excepteur tempor
                <br /> adipisicing in deserunt incididunt quis tempor non do
                anim reprehenderit veniam minim duis.
                <br />
                Culpa sit dolore id magna reprehenderit duis ad quis deserunt
                ullamco fugiat ea fugiat.
              </p>
            </div>

            {/* Comments */}
            {/* comments-sec not used */}
            <div className="comments-sec">
              <h4>Comments</h4>
              <div className="comments-align">
                <img src={avt} alt="avatar" className="avatr-img" />
                <div className="user-details">
                  <h3>Admin</h3>
                  <span className="cmnt-para">
                    Voluptate adipisicing irure velit reprehenderit quis
                    reprehenderit.
                    <br />
                    Labore adipisicing autequi consectetu.
                  </span>
                  <button className="btn reply-btn">Reply</button>
                </div>
              </div>

              <div className="comments-align">
                <img src={avt} alt="avatar" className="avatr-img" />
                <div className="user-details">
                  <h3>Admin</h3>
                  <span className="cmnt-para">
                    Voluptate adipisicing irure velit reprehenderit quis
                    reprehenderit.
                    <br />
                    Labore adipisicing autequi consectetu.
                  </span>
                  <button className="btn reply-btn">Reply</button>
                </div>
              </div>

              <i>Leave your comments</i>
              <form onSubmit={handleSubmit}>
                <div className="input-flex">
                  <div className="input-grid">
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    placeholder="leave a Message"
                    name="msg"
                    value={values.msg}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="btn btn-submit">Submit Comment</button>
              </form>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}
          <div className="blog-Main-right">
            <h2>Search</h2>
            <div className="Blog-search">
              <input
                type="text"
                className="search-bar"
                name="search"
                placeholder="Search Blog"
              />
              <FaSearch className="search-icon" />

              {/* <button>
                <FaSearch className="search-icon" />
              </button> */}
            </div>
            <hr />
            <h2>Categories</h2>
            <div className="Blog-categories">
              <ul>
                <li>Food</li>
                <li>Pizza</li>
                <li>Drink</li>
                <li>Burger</li>
                <li>Music</li>
              </ul>
            </div>

            <h2>Recent Post</h2>
            <div className="Blog-recent-post">
              {recentPost.map((items) => {
                const { id, image, PostedBy, Date, desc } = items;
                return (
                  <article key={id}>
                    <div className="Blog-align-post">
                      <img
                        src={image}
                        alt="recent-post"
                        className="recent-post-img"
                      />
                      <div className="recent-post-align">
                        <p>
                          Posted By : {PostedBy} | Time : {Date}
                        </p>
                        <h4>{desc}</h4>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <h2>Recent Tags</h2>
            <div className="Blog-recent-tags">
              <p className="tags-align">
                <li className="li">Food</li>
              </p>
              <p className="tags-align">
                <li className="li">Drinks</li>
              </p>
              <p className="tags-align">
                <li className="li">Burger</li>
              </p>
              <p className="tags-align">
                <li className="li">Pizza</li>
              </p>
              <p className="tags-align">
                <li className="li">Music</li>
              </p>

              {/* <p className="tags-align">Food</p>
              <p className="tags-align">Drink</p>
              <p className="tags-align">Nature</p>
              <p className="tags-align">Burger</p>
              <p className="tags-align">Pizza</p> */}
              {/* <ul>
                <li>Food</li>
                <li>Drink</li>
                <li>Nature</li>
                <li>Italian</li>
                <li>Burger</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Blog-left-right {
    display: flex;
  }

  .Main-Blog {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
  }

  /* .First-Main {
    position: relative;
    margin: 0px 10px;
    margin-bottom: 30px;
  } */

  h1 {
    margin-left: 100px;
  }

  .second-Main {
    margin: 8px 0px 0px 124px;
    max-width: 55%;
    /* display: grid;
    align-items: center;
    justify-content: center; */
  }

  /* .img-align {
    margin: 0;
  } */

  .blog-image {
    width: 80%;
    height: 30%;
    border-radius: 10px;
  }

  .blog-heading {
    padding: 30px 20px;
    display: grid;
    align-items: center;
    justify-content: flex-start;
  }

  h4 {
    font-size: 20px;
    margin: 19px 0px 5px 0px;
  }

  span {
    color: #d65106;
  }

  p {
    line-height: 30px;
  }

  .avatr-img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }

  .comments-align {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }

  .cmnt-para {
    color: black;
    line-height: 30px;
  }

  .user-details {
    /* display: grid; */
    margin: 0px 0px 0px 23px;
  }

  .reply-btn {
    background-color: #1f1f1f;
    width: 100px;
    margin-left: 30px;
  }

  .reply-btn:hover {
    background-color: #d65106;
  }

  h2 {
    /* margin: 0px 0px 0px 0px; */
    /* margin: 22px 0px 0px -300px; */
  }

  .input-grid {
    display: grid;
    gap: 10px;
  }

  .input-flex {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  input {
    width: 250px;
    height: 50px;
    border-radius: 10px;
    /* gap: 2px 2px; */
  }

  textarea {
    min-width: 200px;
    height: 52px;
    border-radius: 10px;
  }

  ::placeholder {
    font-size: 15px;
  }

  .btn-submit {
    margin-top: 10px;
    width: 250px;
    /* background-color: white; */
    /* color: #d65106; */
  }

  .btn-submit:hover {
    background-color: #fff;
    color: black;
  }

  .Blog-search {
    margin: 0px 0px 0px 49px;
  }

  .search-bar {
    width: 250px;
    height: 40px;
  }

  .search-icon {
    margin: 0px 0px 0px -32px;
    /* border: none; */
    /* background-color: ; */
  }

  hr {
    width: 60%;
    margin: 24px 0px 12px 34px;
  }

  .Blog-categories {
    margin: 0px 0px 0px 50px;
    /* padding-bottom: 30px;
    margin-bottom: 20px; */
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  li {
    line-height: 14px;
    padding: 10px 0px;
    border-top: 2px solid #f5f5f5;
  }

  li:hover {
    color: #d65106;
  }

  .Blog-recent-post {
    display: grid;
  }

  .Blog-align-post {
    display: flex;
    gap: 5px;
    margin: 20px 0px 0px -38px;
  }

  .recent-post-img {
    width: 100px;
    margin-left: 50px;
    border-radius: 10px;
  }

  .recent-post-align {
    margin-left: 15px;
  }

  h4 {
    font-size: 15px;
  }

  .Blog-recent-tags {
    display: flex;
    margin: 0px 0px 1px 92px;
  }

  .tags-align {
    padding: 0px 22px 12px 16px;
  }

  .li {
    /* width: 60px; */
    border-radius: 10px;
    list-style: none;
    background: #f5f5f5;
    padding: 16px 11px 11px 7px;
  }

  .li:hover {
    background-color: #d65106;
    color: #fff;
  }

  @media (max-width: 786px) {
    /* .Blog-left-right {
      display: grid;
    } */

    .second-Main {
      margin: 8px 0px 0px 50px;
      /* max-width: 50%; */
      max-width: none;
    }

    .blog-image {
      width: 95%;
      height: 20%;
    }
    .blog-heading {
      /* margin-left: 100px; */
    }

    .user-details {
      display: grid;
      /* margin: 0px 0px 0px 23px; */
    }

    .reply-btn {
      /* align-items: end; */
      /* justify-content: flex-end; */
      /* margin-right: 30px; */
      /* margin-left: 100px; */
    }

    .Blog-left-right {
      display: grid;
    }

    h2 {
      margin: 19px 0px 8px 49px;
      font-size: 20px;
    }

    .Blog-recent-post {
      display: grid;
    }

    .Blog-align-post {
      /* display: flex; */
      /* gap: 5px; */
      margin: 20px 0px 0px 0px;
    }

    .recent-post-align {
      /* display: flex; */
    }

    .blog-Main-right {
      margin: -60px 0px 0px 0px;
    }
  }

  @media (max-width: 658px) {
    .second-Main {
      max-width: none;
    }

    .blog-image {
      width: 90%;
    }

    .Mobile-align-text {
      margin: 0px 0px 0px 0px;
    }

    .reply-btn {
      margin-left: 270px;
    }

    h3,
    h4,
    p {
      /* margin: 0px 0px 0px 0px; */
    }

    .blog-Main-right {
      margin: 40px 0px 0px 0px;
    }
  }
`;

export default SingleBlog;
