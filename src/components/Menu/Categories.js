import { styled } from "styled-components";

const Categories = ({ categories, filterItems }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }

  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
  }
  .filter-btn:hover {
    background: #d65106;
    color: #fff;
  }
`;

export default Categories;
