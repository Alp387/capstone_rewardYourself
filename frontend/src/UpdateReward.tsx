import {Button, TextField} from "@mui/material";
import {NewReward, Reward} from "./Reward";
import {FormEvent} from "react";
import {useNavigate} from "react-router-dom";

type UpdateRewardProps ={
    updateReward: (updatedReward:Reward) => void
}
export default function UpdateReward(props : UpdateRewardProps){
    const navigate = useNavigate()

    function onUpdateReward(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const updatedReward: Reward = {name: name, description: description, price: price}
        props.updateReward(updatedReward);
        navigate('/rewards/' + reward.id)

    }
    return (
        <div>
            <form onSubmit={onSaveReward}>
                <TextField
                    helperText="name of your reward"
                    id="rewardName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    helperText="describe your reward"
                    id="rewardDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                {<TextField
                    helperText="price of your reward"
                    id="rewardPrice"
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(event) => {
                        const value = Number(event.target.value); // convert to a number
                        setPrice(value);
                    }
                    }
                />}
                <Button type="submit" key="RewardAddButton">Add Reward</Button>
            </form>
        </div>
}