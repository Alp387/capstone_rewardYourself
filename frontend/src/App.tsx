import React, {useEffect, useState} from 'react';
import './App.css';
import RewardGallery from './RewardGallery';
import {NewReward, Reward} from './Reward';
import axios, {AxiosResponse} from 'axios';
import MainBar from './MainBar';
import AddReward from './AddReward';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Button} from '@mui/material';
import RewardDetail from "./RewardDetail";
import UpdateReward from "./UpdateReward";

function App() {
    const [rewards, setRewards] = useState<Reward[]>([]);

    useEffect(() => {
        getAllRewards();
    }, []);

    function getAllRewards() {
        axios
            .get('/api/rewards')
            .then((response: AxiosResponse<any>) => {
                setRewards(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addReward(newReward: NewReward) {
        axios
            .post('/api/rewards/add', newReward)
            .then(() => getAllRewards())
            .catch(() => console.error('post fail'));
    }

    function updateReward(rewardToUpdate: Reward) {
        axios
            .put(`/api/rewards/${rewardToUpdate.id}/update`, rewardToUpdate)
            .then(() => getAllRewards())
            .catch(() => console.error('update fail'))
    }

    return (
        <BrowserRouter>
            <div className="App">
                <MainBar/>
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <div className="button-container">
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="/rewards/add">
                                            New Reward
                                        </Button>
                                    </div>
                                    <RewardGallery rewards={rewards}/>
                                </>
                            }
                        />
                        <Route
                            path="/rewards"
                            element={<RewardGallery rewards={rewards}/>}/>
                        <Route
                            path="/rewards/add"
                            element={<AddReward addReward={addReward}/>}
                        />
                        <Route path='/rewards/:id' element={<RewardDetail/>}/>
                        <Route path='/rewards/:id/update' element={<UpdateReward updateReward={updateReward}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
