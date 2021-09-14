const Tile = function ({ title, text, imgsrc }) {
  const paragraphs = text.split('\r');

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
        {text ? paragraphs.map((p, index) => <p key={index}>{p}</p>) : false}
      </section>
    );
  }
};

export default Tile;
