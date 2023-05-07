import iconLike from "../../../images/like.svg";

const Emoji = (props) => {
  const photo = require(`../../../images/${props.emoji.title}.svg`);
  const clickHandler = () => props.emojiClick(props.emoji.id);
  return (
    <div key={props.emoji.id} className="emoji-box">
      <img
        className="svg-emoji"
        src={photo}
        onClick={clickHandler}
        alt="smile"
      />
      <div className="like-box">
        <p>{props.emoji.count}</p>
        <img className="like-img" src={iconLike} alt="like" />
      </div>
    </div>
  );
};

export default Emoji;
