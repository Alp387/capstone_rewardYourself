import {Reward} from "./Reward";

type RewardProps = {
    reward: Reward
}
export default function RewardCard(props: RewardProps) {

    return (
        <div className="reward-card">

            <p>{props.reward.name}; Progress: {props.reward.savingAllocated} / {props.reward.price}€</p>
        </div>
    )
}