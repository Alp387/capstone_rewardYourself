import {Button, TextField} from "@mui/material";
import {Reward} from "./Reward";
import {FormEvent, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./UpdateReward.css"

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
            id: id,
            name: name,
            description: description,
            price: price,
            savingAllocated: savingAllocated,
            statusOpen: statusOpen,
            rewardCreated: rewardCreated
        }
        props.updateReward(updatedReward);
        navigate('/')
    }

    return (
        <div>
            <form className="update-reward" onSubmit={onUpdateReward}>
                <TextField
                    id="rewardName"
                    label="name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }
                    }
                />
                <TextField
                    id="rewardDescription"
                    label="description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }
                    }
                />
                <TextField
                    id="rewardPrice"
                    label="price"
                    type="number"
                    value={price}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setPrice(value);
                    }
                    }
                />
                <Button type="submit" variant="contained" key="RewardUpdateButton">update Reward</Button>
            </form>
        </div>)
}