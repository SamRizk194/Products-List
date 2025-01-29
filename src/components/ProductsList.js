import productsData from "../products-data";

function ProductsList() {
  const products = productsData.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.image} />
        <h1> {product.title} </h1>
        <p>{product.description}</p>
      </div>
    );
  });
  return <div className="products-list"> {products} </div>;
}
export default ProductsList;
