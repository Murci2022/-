import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/ShopItem/ShopItem";
import { images, data } from "../../constants";

import "./Shop.css";

const Shop = () => (
  <section className="shop__section flex__center section__padding" id="shop">
    <div className=" shop-title">
      <h1 className="h1__cormorant">Mate&apos;s Shop</h1>
      <SubHeading title="" />
    </div>
    <article className="shop-menu">
      <div className=" shop-menu_mates flex__center">
        <p className="shop-menu_heading">music</p>
        <div className="shop-menu_items">
          {data.mates.map((mate, index) => {
            return (
              <MenuItem
                key={mate.title + index}
                title={mate.title}
                price={mate.price}
                tags={mate.tags}
              />
            );
          })}
        </div>
      </div>
      <div className="shop-menu_img">
        <img
          src={images.matejump}
          alt="Mate is doing a wild jump, with an old-time mic in a gray suit"
        />
      </div>
      <div className=" shop-menu_mates flex__center">
        <p className="shop-menu_heading">products</p>
        <div className="shop-menu_items">
          {data.productions.map((production, index) => {
            return (
              <MenuItem
                key={production.title + index}
                title={production.title}
                price={production.price}
                tags={production.tags}
              />
            );
          })}
        </div>
      </div>
    </article>
    <div style={{ marginTop: "15px" }}>
      {/* <button
        type='button'
        className='custom__button'
      >
        View More{' '}
      </button> */}
    </div>
  </section>
);

export default Shop;
