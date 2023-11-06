import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Chat from '../../Components/Chat/Chat';
import "./home.scss"
// import Chats from '../../Components/Chats/Chats';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar/>
                <Chat/>
            </div>
            
        </div>
    );
}

export default Home;
