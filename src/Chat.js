import React, {useEffect, useState} from 'react'
import './Chat.css';
import {useParams} from "react-router-dom";
import {Avatar, IconButton} from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticonOutlined, Mic} from '@material-ui/icons';
import db from './firebase.js'
import {useStateValue} from './StateProvider';
import firebase from 'firebase';

function Chat() {
    const [ input, setInput] = useState("");
    const [seed, setSeed]=useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([""]);
    const [{user}, dispatch] = useStateValue();
   
    useEffect(() => {
     if(roomId){
        db.collection("rooms").doc(roomId).onSnapshot((snapshot)=> setRoomName(snapshot.data().name));
       
        db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot=>(
            setMessages(snapshot.docs.map(doc => doc.data()))
        ))
    }

    }, [roomId]) ; 

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) =>{
            e.preventDefault();
            console.log('You typed>>',input);
            db.collection("rooms").doc(roomId).collection("messages").add({
                message: input,
                name: user.displayName,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),

            });
            setInput("");


    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
                    <p>last seen {" "}
                    {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>
                <div className="chat_headerRight">
                <IconButton>
              <SearchOutlined/>
              </IconButton>
              <IconButton>
              <AttachFile/>
              </IconButton>
              <IconButton>
              <MoreVert/>
              </IconButton>
                </div>
            
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                <p className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
                <span className="chat_name">{message.name}</span>
                    {message.message}
                <span className="chat_timestamp">
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                </span>
                </p>
               ))}
            </div>

            <div className="chat_footer">
                <InsertEmoticonOutlined/>
                <form>
                    <input type="text" value={input} onChange={e=> setInput(e.target.value)} placeholder="Type a message"/>
                        <button onClick={sendMessage} type="submit"> Send a message </button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
