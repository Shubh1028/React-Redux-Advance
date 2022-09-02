import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [{ id: "P1", price: 10, title: "Book", description: "This is a first product - amazing!" },
{ id: "P2", price: 20, title: "Register", description: 'This is a second product - amazing!' },
{ id: "P3", price: 30, title: "Box", description: 'This is a third product - amazing!' }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) =>(
        <ProductItem
          title={product.title}
          id={product.id}
          price={product.price}
          description={product.description}
        /> ))}
      </ul>
    </section>
  );
};

export default Products;
