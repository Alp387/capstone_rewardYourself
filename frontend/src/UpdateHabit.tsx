import {Habit} from "./Habit";
import {useLocation, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {Button, TextField} from "@mui/material";
import "./UpdateHabit.css"

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
            <form className="update-habit" onSubmit={onUpdateHabit}>
                <TextField
                    id="habitName"
                    label="name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    id="habitDescription"
                    label="description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                <TextField
                id="habitSaving"
                label="daily saving"
                type="number"
                value={dailySaving}
                onChange={(event) => {
                    const value = Number(event.target.value);
                    setDailySaving(value);
                }
                }
            />
                <Button type="submit" variant="contained" key="HabitUpdateButton">update Habit</Button>
            </form>
        </div>
    )

}