import {useEffect, useState} from "react";
import {Reward} from "./Reward";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function RewardDetail() {
    const [reward, setReward] = useState<Reward>();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        console.log("Prüfung ob id vorhanden")
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

    return (
        <div>
            {reward ? (
                <div>
                    <h1>Name: {reward.name}</h1>
                    <p>Description: {reward.description}</p>
                    <p>Price: {reward.price}</p>
                    <p>Reward created: {`${reward.rewardCreated}`}</p>
                </div>) : (<p>Reward not found</p>)}
        </div>
    )
}