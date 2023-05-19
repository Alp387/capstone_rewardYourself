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
import HabitGallery from "./HabitGallery";
import {Habit, NewHabit} from "./Habit";
import AddHabit from "./AddHabit";
import HabitDetail from "./HabitDetail";
import UpdateHabit from "./UpdateHabit";

function App() {
    const [rewards, setRewards] = useState<Reward[]>([]);
    const [habits, setHabits] = useState<Habit[]>([]);

    useEffect(() => {
        getAllRewards();
        getAllHabits();
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

    function getAllHabits() {
        axios.get('/api/habits').then((response: AxiosResponse<any>) => {
            setHabits(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }

    function addReward(newReward: NewReward) {
        axios
            .post('/api/rewards/add', newReward)
            .then(() => getAllRewards())
            .catch(() => console.error('post fail'));
    }

    function addHabit(newHabit: NewHabit) {
        axios.post('/api/habits/add', newHabit)
            .then(() => getAllHabits())
            .catch(() => console.error('post fail'));
    }

    function updateReward(rewardToUpdate: Reward) {
        axios
            .put(`/api/rewards/${rewardToUpdate.id}/update`, rewardToUpdate)
            .then(() => getAllRewards())
            .catch(() => console.error('update fail'))
    }

    function updateHabit(habitToUpdate: Habit) {
        axios
            .put(`/api/habits/${habitToUpdate.id}/update`, habitToUpdate)
            .then(() => getAllHabits())
            .catch(() => console.error('update fail'))
    }

    function deleteReward(id: string) {
        axios.delete('/api/rewards/' + id)
            .then(() => getAllRewards())
            .catch(() => {
                console.log("Failed to delete reward")
            })
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
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="/habits/add">
                                            New Habit
                                        </Button>
                                    </div>
                                    <RewardGallery rewards={rewards}/>
                                    <HabitGallery habits={habits}/>
                                </>
                            }
                        />
                        <Route
                            path="/rewards/add"
                            element={<AddReward addReward={addReward}/>}
                        />
                        <Route path='/rewards/:id' element={<RewardDetail deleteReward={deleteReward}/>}/>
                        <Route path='/rewards/:id/update' element={<UpdateReward updateReward={updateReward}/>}/>
                        <Route
                            path="/habits/add"
                            element={<AddHabit addHabit={addHabit}/>}
                        />
                        <Route path='/habits/:id' element={<HabitDetail/>}/>
                        <Route path='/habits/:id/update' element={<UpdateHabit updateHabit={updateHabit}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
