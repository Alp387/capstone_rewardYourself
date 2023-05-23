import {Habit} from "./Habit";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type HabitCardProps = {
    habit: Habit;
};

export default function HabitCard(props: HabitCardProps) {
    const navigate = useNavigate();

    function calculateTimeDifference(oldTimestamp: Date) {
                return Math.round((Date.now() - Date.parse(oldTimestamp.toString()))/(1000 * 60 * 60))
    }

    return (
        <div className="habit-card">
            <p>
                Name: {props.habit.name};
                Daily saving: {props.habit.dailySaving};
                Active since: {calculateTimeDifference(props.habit.startTime)} hours
                <Button
                    size="small"
                    variant="text"
                    onClick={() => {
                        navigate('/habits/' + props.habit.id);
                    }}
                >
                    Details
                </Button>
            </p>
        </div>
    );
}
