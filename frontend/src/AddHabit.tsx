import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {NewHabit} from "./Habit";
import {Button, TextField} from "@mui/material";

type AddHabitProps = {
    addHabit: (newHabit: NewHabit) => void
}

export default function AddHabit(props: AddHabitProps) {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [dailySaving, setDailySaving] = useState<number>(0)
    const navigate = useNavigate()

    function onSaveHabit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newHabit: NewHabit = {name: name, description: description, dailySaving: dailySaving}
        props.addHabit(newHabit)
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={onSaveHabit}>
                <TextField
                    helperText="name of your habit"
                    id="habitName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <TextField
                    helperText="describe the habit"
                    id="habitDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <TextField
                    helperText="daily saving"
                    id="habitDailySaving"
                    label="Daily saving"
                    value={dailySaving}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setDailySaving(value)
                    }}
                />
                <Button type="submit" key="HabitAddButton"> Add Habit</Button>
            </form>
        </div>
    )
}