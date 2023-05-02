import {useEffect, useState} from "react";
import {Reward} from "./Reward";
import {useParams} from "react-router-dom";
import axios from "axios";

type RewardDetailProps = {}
export default function RewardDetail(props: RewardDetailProps) {
    const [reward, setReward] = useState<Reward>();
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [statusOpen, setStatusOpen] = useState<boolean>(true);
    const [rewardCreated, setRewardCreated] = useState<string>("")


    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            getRewardById(id);
        }
    }, [id]);

    function getRewardById(id: string) {

        axios.get("api/rewards/" + id).then((response) => {
            setReward(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            {reward ? (
                <div><h1>{reward.name}               </h1>
                    <p>{reward.description}</p>
                    <p>{reward.price}</p>
                    <p>{reward.statusOpen}</p>
                    <p>{`${reward.rewardCreated}`}</p>
                </div>) : (<p>Loading...</p>)}
        </div>
    )
}