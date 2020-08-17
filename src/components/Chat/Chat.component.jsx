import React, { useEffect, useState } from "react";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import "./Chat.styles.scss";
import db from "../../firebase/firebase";
import Message from "../Message/Message.component";
import ChatInput from "../ChatInput/ChatInput.component";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div className="chat">
      <ScrollToBottom>
        <div className="chat__header">
          <div className="chat__headerLeft">
            <h4 className="chat__channelName">
              <strong>{roomDetails ? roomDetails.name : "Welcome"}</strong>
              <StarBorderOutlined />
            </h4>
          </div>
          <div className="chat__headerRight">
            <h4>
              <InfoOutlined />
              <p>Details</p>
            </h4>
          </div>
        </div>
        <div className="chat__messages">
          {roomMessages.map(({ imageUrl, message, timestamp, user, id }) => (
            <Message
              imageUrl={imageUrl}
              message={message}
              timestamp={timestamp}
              user={user}
              key={id}
            />
          ))}
        </div>
        <ChatInput channelId={roomId} channelName={roomDetails?.name} />
      </ScrollToBottom>
    </div>
  );
};

export default Chat;
