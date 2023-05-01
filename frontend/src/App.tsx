import React, {useEffect, useState} from 'react';

import './App.css';
import RewardGallery from "./RewardGallery";
import {NewReward, Reward} from "./Reward";
import axios, {AxiosResponse} from "axios";
import MainBar from "./MainBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const [rewards, setRewards] = useState<Reward[]>([])

    useEffect(() => {
        loadAllRewards()
    }, [])

    function loadAllRewards() {
        axios.get("/api/rewards")
            .then((response: AxiosResponse<any>) => {
                setRewards(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }


return (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <MainBar/>
            </header>
            <Routes>
                <Route path="/"
                       element={<RewardGallery rewards={rewards}/>}/>
                <Route path="/api/rewards/add"
                       element={<AddReward>}/>
            </Routes>
        </div>
    </BrowserRouter>
);

}
export default App;
