import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😥": "sad",
  "😍": "smiling",
  "😘": "kiss",
  "😭": "crying",
  "🤞": "crossed fingers",
  "👌": "Ok hand",
  "🤗": "Hugging",
  "💀": "skull",
  "❤️": "heart",
  "👻": "ghost",
  "😞": "disappointed",
  "😊": "smile"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter! </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning}</h2>

      <h3>emojis we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "3rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// things to remember
// class -> classname
//style -> takes an object intead of ""

// viser->
// view-> Interact-> update -> state -> render
