import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../provider/provider";
import "./ChatInput.styles.scss";
import db from "../../firebase/firebase";
import firebase from "firebase";

const ChatInput = ({ channelId, channelName }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        imageUrl: user.photoURL,
        user: user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <div className="chatInput__box">
        {" "}
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message #${channelName?.toLowerCase()}`}
          />
          <Button type="submit" onClick={sendMessage}>
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
