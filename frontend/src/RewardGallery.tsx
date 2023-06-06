import {Reward} from "./Reward";
import RewardCard from "./RewardCard";
import "./RewardGallery.css"

type RewardGalleryProps = {
    rewards: Reward[],
}

export default function RewardGallery(props: RewardGalleryProps) {
    return (
        <div className="reward-gallery">
            <h1>RewardGallery</h1>
            {props.rewards.map((card: Reward) => (
                <RewardCard key={card.id} reward={card}/>
            ))}
        </div>
    )
}