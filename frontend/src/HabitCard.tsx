import {Habit} from "./Habit";

type HabitCardProps = {
    habit: Habit
}
export default function HabitCard(props: HabitCardProps) {
    return (
        <div className="habit-card">
            <p>Name: {props.habit.name};
            Daily saving: {props.habit.dailySaving};
            Last collection x hours ago</p>
        </div>
    )
}