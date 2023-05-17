import {Habit} from "./Habit";

type HabitCardProps = {
    habit: Habit
}
export default function HabitCard(props: HabitCardProps) {
    return (
        <div className="habit-card">
            <p>Name: {props.habit.name};
            Daily reward: {props.habit.dailyReward};
            Last collection x hours ago</p>
        </div>
    )
}