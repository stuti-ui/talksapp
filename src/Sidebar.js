import { Avatar}  from '@material-ui/core';
import { Chat, DonutLarge, MoreVert} from '@material-ui/icons';
import {IconButton}  from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import React, {useEffect, useState}  from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from './firebase.js'

function  Sidebar() {
  const [rooms, setRoom]= useState([]);

  useEffect (()=>{
    const unsubscribe= db.collection('rooms').onSnapshot((snapshot)=>
      setRoom(snapshot.docs.map(doc=>
        ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () =>{
      unsubscribe();
    }; 
  },[]);
    return(
        <div className="sidebar">

          <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_headerRight">
            <IconButton>
              <DonutLarge/>
              </IconButton>
              <IconButton>
              <Chat/>
              </IconButton>
              <IconButton>
              <MoreVert/>
              </IconButton>
            </div>
          </div>

          <div className="sidebar_search">
              <div className="sidebar_searchContainer">
              <SearchIcon/>
            <input placeholder="Search or start new chat" type="text"/>
          </div>
        </div>
          <div className="sidebar_chats">
            <SidebarChat addNewChat/>
            {rooms.map(rooms=>(
              <SidebarChat key={rooms.id} id={rooms.id}
              name={rooms.data.name}/>
            ))}
            
          </div>

        </div>
    );
    
}

export default Sidebar;