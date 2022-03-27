import React from "react";
import Avatar from "./Avatar";

function ChatListItems({ name, key, animationDelay, active, isOnline, image }) {
  // const selectChat = (e) => {
  //   for (
  //     let index = 0;
  //     index < e.currentTarget.parentNode.children.length;
  //     index++
  //   ) {
  //     e.currentTarget.parentNode.children[index].classList.remove("active");
  //   }
  //   e.currentTarget.classList.add("active");
  // };

  return (
    <div style={{ animationDelay: `0.1` }} className={`chatlist__item`}>
      <Avatar
        image={image ? image : "http://placehold.it/80x80"}
        isOnline={isOnline}
      />

      <div className="userMeta">
        <p>{name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
}

export default ChatListItems;
