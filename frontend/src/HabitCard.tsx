import {Habit} from "./Habit";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import "./HabitCard.css"

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
                navigate("/", {state: {refresh: true}});
            });
        }
    }

    return (
        <Card className="habit-card">
            <CardContent sx={{display: "flex", alignItems: "center", maxWidth: "sm", maxHeight: "sm",flexDirection:"column"}}>
                <Typography>
                    {props.habit.name}
                </Typography>
                <Typography>
                    Daily saving: {props.habit.dailySaving}
                </Typography>
                <Typography>
                    Active since: {calculateTimeDifference(props.habit.startTime)} hours
                </Typography>
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
            </CardContent>
        </Card>
    );
}
