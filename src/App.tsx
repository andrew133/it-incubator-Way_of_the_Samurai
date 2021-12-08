import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StateType} from "./index";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs dialogData={props.state.dialogPage.dialogData} messageData={props.state.dialogPage.messageData}/>}/>
                        {/*<Route path = "/profile" element={<Profile />}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

debugger
export default App;
