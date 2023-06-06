import {useEffect, useState} from "react";
import {Reward} from "./Reward";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, CardContent, Typography} from "@mui/material";

type RewardDetailProps = {
    deleteReward: (id: string) => void
}
export default function RewardDetail(props: RewardDetailProps) {
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

    function onDeleteButtonClick() {
        if (reward) {
            props.deleteReward(reward.id)
        }
        navigate('/')
    }

    return (
        <Card>
            <CardContent sx={{
                display: "flex", alignItems: "center", maxWidth: "sm", maxHeight: "sm",
                flexDirection: "column", backgroundColor: "beige"
            }}>
                {reward ? (
                    <div >

                        <h2>{reward.name}</h2>
                        <Typography>Description: {reward.description}</Typography>
                        <Typography>Price: {reward.price}</Typography>
                        <Typography>Savings allocated: {reward.savingAllocated}</Typography>
                        <Typography>Reward created: {`${reward.rewardCreated}`}</Typography>
                        <Button size="small" onClick={() => {
                            navigate('/rewards/' + reward.id + '/update', {state: reward})
                        }}>
                            Update Reward
                        </Button>
                        <Button size="small" color="warning" onClick={() => onDeleteButtonClick()}>
                            Delete Reward
                        </Button>
                    </div>) : (<p>Reward not found</p>)}
            </CardContent>
        </Card>
    )
}