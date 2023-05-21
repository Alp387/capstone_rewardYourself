import {Habit} from "./Habit";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type HabitCardProps = {
    habit: Habit
}
export default function HabitCard(props: HabitCardProps) {
    const navigate = useNavigate()

    return (
        <div className="habit-card">
            <p>Name: {props.habit.name};
                Daily saving: {props.habit.dailySaving};
                Last collection x hours ago
                <Button size="small" variant="text" onClick={() => {
                    navigate('/habits/' + props.habit.id)
                }}>
                    Details
                </Button>
            </p>
        </div>
    )
}