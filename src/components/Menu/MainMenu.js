import React, { useState } from "react";
import Menu from "./Menu";
import { items } from "../../data";
import Categories from "./Categories";
import { styled } from "styled-components";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Wrapper>
      <main id="section-3">
        <section className="menu section">
          <div className="title">
            <h3>Special Menu</h3>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .menu {
    padding: 5rem 0;
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
`;
export default MainMenu;
