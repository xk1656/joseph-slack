import React from "react";
import "./Message.styles.scss";

const Message = ({ message, imageUrl, user, timestamp }) => {
  return (
    <div className="message">
      <img src={imageUrl} alt="" />
      <div className="message__info">
        <h4>
          {user}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
