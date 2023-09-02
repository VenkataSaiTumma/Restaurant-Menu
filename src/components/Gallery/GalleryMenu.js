import { styled } from "styled-components";

const GalleryMenu = ({ gallery }) => {
  return (
    <Wrapper>
      <div className="section-center">
        {gallery.map((item) => {
          const { id, img } = item;
          return (
            <article key={id} className="section-item">
              <img src={img} alt="gallery-img" />
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 2rem;
  }

  .section-item {
    max-width: 25rem;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export default GalleryMenu;
