import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MyPostType} from "./components/Profile/MyPost/MyPosts";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogsItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import state, {StateType} from "./index";




function App(props:StateType) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile posts={props.profilePage.posts}/>}/>
                        <Route path="/dialogs" element={<Dialogs dialogData={state.dialogData} messageData={props.messageData}/>}/>
                        {/*<Route path = "/profile" element={<Profile />}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}
debugger
export default App;
