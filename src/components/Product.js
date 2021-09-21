const Product = function ({ name, price, tag, src }) {
  return (
    <article>
      <span>{tag}</span>
      <img src={src} alt={name} />
      <p>{name}</p>
      <h4>€{price},-</h4>
    </article>
  );
};

export default Product;
