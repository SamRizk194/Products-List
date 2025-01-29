import productsData from "../products-data";
import "./products.css";

function ProductsList() {
  const products = productsData.map((el) => {
    return (
      <div className="card" key={el.id}>
        <img src={el.image} alt="" />
        <h1> {el.title} </h1>
        <p>{el.description}</p>
        <p>{el.price}</p>
        <button
          onClick={() => {
            console.log(el.price);
          }}
        >
          price
        </button>
      </div>
    );
  });
  return (
    <div className="products-list">
      <div className="row">{products}</div>
    </div>
  );
}
export default ProductsList;
