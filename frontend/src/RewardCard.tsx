import {Reward} from "./Reward";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type RewardCardProps = {
    reward: Reward
}
export default function RewardCard(props: RewardCardProps) {
    const navigate = useNavigate()
    return (
        <div className="reward-card">

            <p>{props.reward.name}; Progress: {props.reward.savingAllocated} / {props.reward.price}€
            <Button size="small" variant ="text" onClick={() => {
                navigate('/rewards/' + props.reward.id)}}>
                     Details
            </Button>
            </p>
        </div>
    )
}