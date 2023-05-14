import {useEffect, useState} from "react";
import {Reward} from "./Reward";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";


export default function RewardDetail() {
    const [reward, setReward] = useState<Reward>();
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getRewardById(id);
        }
    }, [id]);

    function getRewardById(id: string) {
        axios.get('/api/rewards/' + id).then((response) => {
            setReward(response.data);
        }).catch((error) => {
            console.log("Reward not found " + error);
        })
    }

    function deleteReward(id: string) {
        axios.delete('/api/rewards/' + id).catch((error) => {
            console.log("Failed to delete reward" + error)
        })
        navigate('/rewards/')
    }

    return (
        <div>
            {reward ? (
                <div>
                    <Button size="small" onClick={() => {
                        navigate('/rewards/' + reward.id + '/update', {state: reward})
                    }}>
                        Update Reward
                    </Button>
                    <Button size="small" onClick={() => deleteReward(reward.id)}>
                        Delete Reward
                    </Button>
                    <h1>Name: {reward.name}</h1>
                    <p>Description: {reward.description}</p>
                    <p>Price: {reward.price}</p>
                    <p>Savings allocated: {reward.savingAllocated}</p>
                    <p>Reward created: {`${reward.rewardCreated}`}</p>
                </div>) : (<p>Reward not found</p>)}
        </div>
    )
}