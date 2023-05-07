import Emoji from "../common/Emoji/Emoji";

const EmojiList = (props) => {
  return (
    <ul className="emoji__wrapper">
      {props.emojies.map((el) => {
        return <Emoji emoji={el} emojiClick={props.emojiClick} />;
      })}
    </ul>
  );
};

export default EmojiList;
