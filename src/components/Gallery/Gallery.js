import { styled } from "styled-components";
import { gallery } from "../../data";
import GalleryMenu from "./GalleryMenu";

const Gallery = () => {
  return (
    <Wrapper>
      <div className="Main-gallery" id="section-4">
        <h2>Gallery</h2>
        <p>Lorem Ipsum is simply dummy text of the </p>
      </div>
      <GalleryMenu gallery={gallery} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main-gallery {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin: 0px 0px 0px 163px;
    font-size: 30px;
  }
`;

export default Gallery;
