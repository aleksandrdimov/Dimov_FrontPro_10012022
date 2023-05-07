const EmojiWinner = (props) => {
  const img = require(`../../images/${props.winner[0].title}.svg`);

  return (
    <div className="emoji-winner">
      <img className="svg-emoji" src={img} alt="smile" />
      {!props.winner[0].noWinner ? (
        <p>Winner!</p>
      ) : (
        <p>{props.winner[0].noWinner}</p>
      )}
    </div>
  );
};

export default EmojiWinner;
