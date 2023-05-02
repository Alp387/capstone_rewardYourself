import {Reward} from "./Reward";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type RewardProps = {
    reward: Reward
}
export default function RewardCard(props: RewardProps) {
    const navigate = useNavigate()
    return (
        <div className="reward-card">

            <p>{props.reward.name}; Progress: {props.reward.savingAllocated} / {props.reward.price}€</p>
            <Button size="small" onClick={() => {
                navigate("/rewards/" + props.reward.id)
            }}>Details</Button>

        </div>
    )
}