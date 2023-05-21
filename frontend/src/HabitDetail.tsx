import {useEffect, useState} from "react";
import {Habit} from "./Habit";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";

export default function HabitDetail() {
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

    return (
        <div>
            {habit ? (
                <div>
                    <Button size="small" variant="outlined"
                            onClick={() => navigate('/habits/' + habit.id + '/update',
                                {state: habit})}>
                        Update Habit
                    </Button>
                    <h1>Name: {habit.name}</h1>
                    <p>Daily average saving: {habit.dailySaving}</p>
                    <p>Description: {habit.description}</p>
                    <p>Start DateTime: {` ${habit.startTime}`}</p>
                </div>) : (<p>Habit not found</p>)
            }
        </div>
    )
}