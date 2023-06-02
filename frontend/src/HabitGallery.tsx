import {Habit} from "./Habit";
import HabitCard from "./HabitCard";
import "./HabitGallery.css"

type HabitGalleryProps = {
    habits: Habit[],
}

export default function HabitGallery(props: HabitGalleryProps) {
    return (
        <div className="habit-gallery">
            <h1>HabitGallery</h1>
            {props.habits.map((card: Habit) => (
                <HabitCard key={card.id} habit={card}/>
            ))}
        </div>
    )
}