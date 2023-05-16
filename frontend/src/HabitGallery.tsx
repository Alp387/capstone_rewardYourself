import {Habit} from "./Habit";
import HabitCard from "./HabitCard";

type HabitGalleryProps = {
    habits: Habit[],
}

export default function HabitGallery(props: HabitGalleryProps) {
    return (
        <div className={"habit-gallery"}>
            <h2>HabitGallery</h2>
            {props.habits.map((card: Habit) => (
                <HabitCard key={card.id} habit={card}/>
            ))}
        </div>
    )
}