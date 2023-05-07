import "./App.css";
import { useState } from "react";
import EmojiList from "./components/EmojiList/EmojiList";
import EmojiWinner from "./components/EmojiWinner/EmojiWinner";
import ButtonShow from "./components/common/ButtonShow/ButtonShow";

function App() {
  const [emojies, setEmojies] = useState([
    { id: 1, title: "smile", count: 0 },
    { id: 2, title: "stars", count: 0 },
    { id: 3, title: "cry", count: 0 },
    { id: 4, title: "angry", count: 0 },
    { id: 5, title: "tongue", count: 0 },
  ]);

  const [winners, setWinners] = useState([]);

  const emojiClick = (id) => {
    let changeCount = emojies.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, count: emoji.count + 1 };
      }
      return emoji;
    });
    setEmojies(changeCount);
  };

  const clickButtonShow = () => {
    const result = emojies.reduce((acc, curr) =>
      acc.count >= curr.count ? acc : curr
    );
    const filter = emojies.filter((el) => el.id === result.id);

    const filterDel = emojies.filter((el) => el.id !== result.id);
    const result2 = filterDel.reduce((acc, curr) =>
      acc.count >= curr.count ? acc : curr
    );

    result.count !== result2.count
      ? setWinners(filter)
      : setWinners([{ id: 1, title: "winner", noWinner: "No winner!" }]);
  };

  return (
    <div className="App">
      <EmojiList emojies={emojies} emojiClick={emojiClick} />
      <ButtonShow clickButtonShow={clickButtonShow} />

      {winners.length ? <EmojiWinner winner={winners} /> : ""}
    </div>
  );
}

export default App;
