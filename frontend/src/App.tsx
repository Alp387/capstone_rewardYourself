import React, {useEffect, useState} from 'react';

import './App.css';
import RewardGallery from "./RewardGallery";
import {Reward} from "./Reward";
import axios, {AxiosResponse} from "axios";

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
        <div className="App">
            <header className="App-header">
                <p>"Here is the Header"</p>
            </header>
            <RewardGallery rewards={rewards}/>
        </div>
    );
}

export default App;
