import { Habit } from "./Habit";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

type HabitCardProps = {
    habit: Habit;
};

export default function HabitCard(props: HabitCardProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function calculateTimeDifference(oldTimestamp: Date) {
        return Math.round(
            (Date.now() - Date.parse(oldTimestamp.toString())) / (1000 * 60 * 60)
        );
    }

    function onCollectButtonClick() {
        if (props.habit) {
            axios.put("/api/habits/" + props.habit.id + "/collect").then(() => {
                // Refresh the page by navigating to the root path with a refresh flag in the location state
                navigate("/", { state: { refresh: true } });
            });
        }
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
                        navigate("/habits/" + props.habit.id);
                    }}
                >
                    Details
                </Button>
                <Button
                    size="small"
                    variant="text"
                    onClick={onCollectButtonClick}
                >
                    Collect
                </Button>
            </p>
        </div>
    );
}
