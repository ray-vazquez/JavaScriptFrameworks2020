/**
 * This same component will be used for every category (food, clothing and office).
 * Right now, it is hardcoded to display office supplies.
 * Change this so that it will display products for the correct category.
 *
 * See ./src/components/Movie/Movie.jsx in
 * @see https://codesandbox.io/s/react-router-vij9b?fontsize=14&hidenavigation=1&theme=dark
 *
 * @see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf#46b8
 */

import React from "react";

/**
 * This imports a list of products.
 */
import inventory from "../../assets/inventory";

function Category(props) {
  /**
   * Category is hardcoded here.
   * This is the only part you will need to change in this file.
   */
  const category = "office"; // change me
  /**
   * All the products in a category. To see how this works, take a look at
   * @see exercises/10-react-router/src/assets/inventory.js
   */
  const products = inventory[category];

  return (
    <div>
      <h2 className="lead mb-4">CATEGORY > {category.toUpperCase()}</h2>
      <div className="row">
        {/**
         * This loops through all the products for a the selected category
         * and displays them on the screen.
         */
        products.map((product, index) => {
          return (
            <div className="col mb-4" key={`product-${index}`}>
              <img src={product.image} alt="" className="mb-3" />
              <div>{product.description}</div>
              <strong>$ {product.price.toFixed(2)}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
