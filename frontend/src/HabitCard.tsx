import {Habit} from "./Habit";

type HabitCardProps = {
    habit: Habit
}
export default function HabitCard(props: HabitCardProps) {
    return (
        <div className="habit-card">
            <p>Name: {props.habit.name}</p>
            <p>Daily reward: {props.habit.dailyReward}</p>
            <p>Last collection x hours ago</p>
        </div>
    )
}