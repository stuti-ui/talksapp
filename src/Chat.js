import React, {useEffect, useState} from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticonOutlined, Mic} from '@material-ui/icons';

function Chat() {
    const [ input, setInput] = useState("");
    const[seed, setSeed]=useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) =>{

    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3>Username</h3>
                    <p>Last seen at ...</p>
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
                <p className={`chat_message ${true && "chat_receiver"}`}>
                <span className="chat_name">stuti</span>
                    Hey Guys
                <span className="chat_timestamp">2:03am</span>
                </p>
               
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
