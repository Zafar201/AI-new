import React, { useState ,useRef} from "react";
import "./ChatUI.css";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";

function ChatUI({ user }) {
  // const userSignin = useSelector(state => state.userSignin)
  //   const { loading, error, userInfo } = userSignin

  // const [message, setMessage] = useState("");
  // const firestore = firebase.firestore();
  // const lastmessage=useRef()
  // const messagesRef = firestore.collection("messages");
  // const query = messagesRef.orderBy("createdAt");
  // const [messages] = useCollectionData(query, { idField: "id" });
  // const sendMessage = async (e) => {
  //   e.preventDefault();
  //   const messagesRef = firestore.collection("messages");
  //   const { user_id, name } = userInfo;
  //   await messagesRef.add({
  //     text: message,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //      user_id ,
  //      name
  //   });
  //   setMessage("");
  //   lastmessage.current.scrollIntoView({behavior:"smooth"});
  // };
  return (
    <div className="chat-window">
      {/* <div className="messages">
        {messages &&
          messages.map((msg) => {
            const messageClass = msg.user_id  === userInfo.user_id  ? "sent" : "recieve";
            return (
              <div className={`message ${messageClass}`} key={msg.user_id }>
                <img
                  src={
                    msg.photoURL ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  }
                  alt=""
                />
                <h4>{msg.name}</h4>
                <p>{msg.text}</p>

              </div>
            );
          })}<span ref={lastmessage}></span>
      </div> */}
      
      {/* <div className="inputSection">
        <form className="form1" onSubmit={sendMessage}>
          <input
            value={message}
            placeholder="type here....."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <img
            onClick={sendMessage}
            src="../assets/img/right-rocket.png"
            alt="send"
            className="chat-send-btn"
          />
        </form>
      </div> */}
    </div>
  );
}

export default ChatUI;
