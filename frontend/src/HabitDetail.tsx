import {useEffect, useState} from "react";
import {Habit} from "./Habit";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, CardContent, Typography} from "@mui/material";


type HabitDetailProps = {
    deleteHabit: (id: string) => void
}

export default function HabitDetail(props: HabitDetailProps) {
    const [habit, setHabit] = useState<Habit>();
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getHabitById(id);
        }
    }, [id]);

    function getHabitById(id: string) {
        axios.get('/api/habits/' + id)
            .then((response) => {
                setHabit(response.data);
            })
            .catch((error) => {
                console.log("Habit not found" + error);
            })
    }

    function onDeleteButtonClick() {
        if (habit) {
            props.deleteHabit(habit.id)
        }
        navigate('/')
    }


    return (
        <Card>
            <CardContent sx={{
                display: "flex", alignItems: "center", maxWidth: "sm", maxHeight: "sm",
                flexDirection: "column", backgroundColor: "bisque"
            }}>
                {habit ? (
                    <div>
                        <h2>{habit.name}</h2>
                        <Typography>Daily average saving: {habit.dailySaving}</Typography>
                        <Typography>Description: {habit.description}</Typography>
                        <Typography>Start DateTime: {` ${habit.startTime}`}</Typography>
                        <Button size="small"
                                onClick={() => navigate('/habits/' + habit.id + '/update',
                                    {state: habit})}>
                            Update Habit
                        </Button>
                        <Button size="small" color="warning"
                                onClick={() => onDeleteButtonClick()}>
                            Delete Habit
                        </Button>
                    </div>) : (<p>Habit not found</p>)
                }</CardContent>
        </Card>
    )
}