import { styled } from "styled-components";

const Menu = ({ items }) => {
  return (
    <Wrapper>
      <div className="section-center">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
  }
  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;
  }
  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid #c59d5f;
    border-radius: 0.25rem;
    display: block;
  }
  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted hsl(210, 22%, 49%);
  }
  .item-info h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: #c59d5f;
  }
  .item-text {
    margin-bottom: 0;
    padding-top: 1rem;
  }

  .menu-item:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }
    .photo {
      height: 175px;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-center {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }
    .photo {
      height: 150px;
    }
  }
`;

export default Menu;
