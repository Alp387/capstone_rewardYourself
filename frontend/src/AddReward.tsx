import {FormEvent, useState} from "react";
import {NewReward} from "./Reward";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./AddReward.css"

type AddRewardProps = {
    addReward: (newReward: NewReward) => void
}

export default function AddReward(props: AddRewardProps) {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const navigate = useNavigate()


    function onSaveReward(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newReward: NewReward = {name: name, description: description, price: price}
        props.addReward(newReward);
        navigate("/")

    }

    return (
        <div>
            <h2>New Reward</h2>
            <form className="form-newReward" onSubmit={onSaveReward}>
                <TextField
                    id="rewardName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    id="rewardDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                <TextField
                    id="rewardPrice"
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setPrice(value);
                    }}
                />
                <Button type="submit" key="RewardAddButton" variant="contained"> Add Reward</Button>
            </form>
        </div>
    )
}
