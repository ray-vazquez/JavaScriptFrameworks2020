import React from "react";
import inventory from "../../assets/inventory";

function Category(props) {
  /**
   * @see solutions/10-react-router/src/components/App/App.solutions.jsx
   * and look at this line of code:
   * `<Route exact path="/category/:category" component={Category} />`
   * The ":category" is essentially a variable, which react router injects
   * into props like this:
   * @example
   * {
   *    match: {
   *     params: {
   *       food: [
   *         {
   *           description: "Permatex 4 Pack Super Glue",
   *           image: // ...
   *           price: 1.87
   *         },
   *         // ...
   *       ]
   *     }
   *   }
   * }
   */
  const category = props.match.params.category;
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
