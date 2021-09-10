const Tile = function ({ title, text, imgsrc }) {
  if (imgsrc) {
    return (
      <section>
        <img src={imgsrc} alt={title} />
      </section>
    );
  } else {
    return (
      <section>
        <h2>{title}</h2>
        <p>{text}</p>
      </section>
    );
  }
};

export default Tile;
