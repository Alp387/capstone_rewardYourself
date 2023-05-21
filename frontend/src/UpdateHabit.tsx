import {Habit} from "./Habit";
import {useLocation, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {Button, TextField} from "@mui/material";

type UpdateHabitProps = {
    updateHabit: (updatedHabit: Habit) => void
}

export default function UpdateHabit(props: UpdateHabitProps) {
    const {state: habit} = useLocation()
    const [name, setName] = useState<string>(habit.name)
    const [dailySaving, setDailySaving] = useState<number>(habit.dailySaving)
    const [description, setDescription] = useState<string>(habit.description)
    const id = habit.id
    const startTime = habit.startTime
    const lastCollect = habit.lastTimeCollected
    const endTime = habit.endTime
    const statusOpen = habit.statusOpen
    const navigate = useNavigate()

    function onUpdateHabit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const updatedHabit: Habit = {
            id: id,
            name: name,
            description: description,
            startTime: startTime,
            dailySaving: dailySaving,
            lastTimeCollected: lastCollect,
            endTime: endTime,
            statusOpen: statusOpen
        }
        props.updateHabit(updatedHabit);
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={onUpdateHabit}>
                <TextField
                    helperText="name of habit"
                    id="habitName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    helperText="daily average saving"
                    id="habitSaving"
                    label="Saving"
                    type="number"
                    value={dailySaving}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setDailySaving(value);
                    }
                    }
                />
                <TextField
                    helperText="description of habit"
                    id="habitDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                <Button type="submit" variant="outlined" key="HabitUpdateButton">update Habit</Button>
            </form>
        </div>
    )

}