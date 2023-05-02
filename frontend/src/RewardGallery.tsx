import {Reward} from "./Reward";
import RewardCard from "./RewardCard";

type RewardGalleryProps = {
    rewards: Reward[],
}

export default function RewardGallery(props: RewardGalleryProps) {

    return (
        <div className="reward-gallery">
            <h2>RewardGallery</h2>
            {props.rewards.map((card: Reward) => (
                <RewardCard key={card.id} reward={card}/>
            ))}
        </div>
    )
}