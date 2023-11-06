import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from './../Search/Search';
import Chat from '../Chats/Chats';
import Chats from '../Chats/Chats';

const Sidebar = () => {
    return (
        <div className='sidebar'>
         <Navbar/> 
        <Search/>
         <Chats/>
        </div>
    );
}

export default Sidebar;
