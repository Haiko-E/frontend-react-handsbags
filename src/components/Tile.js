const Tile = function ({ title, text, imgsrc }) {
  // geeft een array van paragraven
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
        {text && paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      </section>
    );
  }
};

export default Tile;

// wanneer er text aanwezig is mapt hij over de array van paragraven en returned ze als JSX <p>  </p> elementen.
// {text && paragraphs.map((p, index) => <p key={index}>{p}</p>)}
