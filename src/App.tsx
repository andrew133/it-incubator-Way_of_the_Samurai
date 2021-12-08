import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StateType} from "./Redax/state";


type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs dialogPage={props.state.dialogPage} />}/>
                        {/*<Route path = "/profile" element={<Profile />}/>*/}
                    </Routes>
                </div>
            </div>


    );
}

debugger
export default App;
