import {useEffect, useState} from "react";
import {Reward} from "./Reward";
import {useParams} from "react-router-dom";
import axios from "axios";
import RewardCard from "./RewardCard";

/*type RewardDetailProps= {
    rewardCard: typeof RewardCard
}*/

export default function RewardDetail() {
    const [reward, setReward] = useState<Reward>();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {

        console.log("Prüfung ob id vorhanden")
        if (id) {

            getRewardById(id);
        }
    }, []);

    function getRewardById(id: string) {

        axios.get('/api/rewards/' + id).then((response) => {
            setReward(response.data);
        }).catch((error) => {
            console.log("Reward not found " +error);
        })
    }

    return (
        <div>
            {reward ? (
                <div>
                    <h1>{reward.name}</h1>
                    <p>{reward.description}</p>
                    <p>{reward.price}</p>
                    <p>{reward.statusOpen}</p>
                    <p>{`${reward.rewardCreated}`}</p>
                </div>) : (<p>Loading...</p>)}
        </div>
    )
}