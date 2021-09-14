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
        {text ? <p>{text}</p> : false}
      </section>
    );
  }
};

export default Tile;
