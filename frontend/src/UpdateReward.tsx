import {Button, TextField} from "@mui/material";
import {Reward} from "./Reward";
import {FormEvent, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

type UpdateRewardProps = {
    updateReward: (updatedReward: Reward) => void
}
export default function UpdateReward(props: UpdateRewardProps) {
    const {state: reward} = useLocation()
    const [name, setName] = useState<string>(reward.name)
    const [description, setDescription] = useState<string>(reward.description)
    const [price, setPrice] = useState<number>(reward.price)
    const id = reward.id
    const savingAllocated = reward.savingAllocated
    const statusOpen = reward.statusOpen
    const rewardCreated = reward.rewardCreated
    const navigate = useNavigate()


    function onUpdateReward(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const updatedReward: Reward = {
            id: id, name: name, description: description, price: price,
            savingAllocated: savingAllocated, statusOpen: statusOpen, rewardCreated: rewardCreated
        }
        props.updateReward(updatedReward);
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={onUpdateReward}>
                <TextField
                    helperText="name of reward"
                    id="rewardName"
                    label="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    helperText="description of reward"
                    id="rewardDescription"
                    label="Description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                {<TextField
                    helperText="price of reward"
                    id="rewardPrice"
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setPrice(value);
                    }
                    }
                />}
                <Button type="submit" key="RewardAddButton">update Reward</Button>
            </form>
        </div>)
}